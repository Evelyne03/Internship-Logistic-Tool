package com.internshiptoolapp.services;

import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.MentorGrade;
import com.internshiptoolapp.repository.MentorGradeRepo;

@Service
public class MentorGradeService {

    private final MentorGradeRepo mentorGradeRepository;

    public MentorGradeService(MentorGradeRepo mentorGradeRepository) {
        this.mentorGradeRepository = mentorGradeRepository;
    }

    public MentorGrade createGrade(MentorGrade grade) {
        return mentorGradeRepository.save(grade);
    }

    // Add methods to handle CRUD operations
}
