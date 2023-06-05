package com.internshiptoolapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.MentorGrade;
import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.repository.MentorGradeRepo;
import com.internshiptoolapp.repository.UserRepo;

@Service
public class MentorGradeService {

    private final MentorGradeRepo mentorGradeRepository;

    public MentorGradeService(MentorGradeRepo mentorGradeRepository) {
        this.mentorGradeRepository = mentorGradeRepository;
    }

    public MentorGrade createGrade(MentorGrade grade) {
        return mentorGradeRepository.save(grade);
    }

    public List<MentorGrade> getAllGrades() {
        return mentorGradeRepository.findAll();
    }

    @Autowired
    private UserRepo UserRepo;

    public User addMentor(Long gradeId, Long mentorId) {
        MentorGrade grade = mentorGradeRepository.findById(gradeId).orElseThrow(() -> new IllegalArgumentException("Grade not found"));
        User mentor = UserRepo.findById(mentorId).orElseThrow(() -> new IllegalArgumentException("Mentor not found"));
        if(!mentor.getRole().equalsIgnoreCase("mentor")) {
            throw new IllegalArgumentException("User role is not 'mentor'");
        }

        grade.setMentor(mentor);
        return UserRepo.save(mentor);
    }

    public User addStudent(Long gradeId, Long studentId) {
        MentorGrade grade = mentorGradeRepository.findById(gradeId).orElseThrow(() -> new IllegalArgumentException("Grade not found"));
        User student = UserRepo.findById(studentId).orElseThrow(() -> new IllegalArgumentException("Student not found"));
        if(!student.getRole().equalsIgnoreCase("member")) {
            throw new IllegalArgumentException("User role is not 'member'");
        }

        grade.setStudent(student);
        return UserRepo.save(student);
    }

    public List<MentorGrade> getGradesByTask(Long taskId) {
        return mentorGradeRepository.findByTask(taskId);
    }
}
