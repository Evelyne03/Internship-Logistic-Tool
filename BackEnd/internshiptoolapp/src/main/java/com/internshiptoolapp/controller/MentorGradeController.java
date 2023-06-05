package com.internshiptoolapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.MentorGrade;
import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.services.MentorGradeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/grades")
public class MentorGradeController {
    @Autowired
    private MentorGradeService mentorGradeService;

    @PostMapping("/create")
    public ResponseEntity<MentorGrade> createGrade(@RequestBody MentorGrade grade){
        MentorGrade createdGrade = mentorGradeService.createGrade(grade);
        return ResponseEntity.ok(createdGrade);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<MentorGrade>> getAllGrades(){
        List<MentorGrade> grades = mentorGradeService.getAllGrades();
        return ResponseEntity.ok(grades);
    }

    @PatchMapping("/{gradeId}/update")
        public ResponseEntity<?> updateGrade(@PathVariable Long gradeId, @RequestBody Map<String, Long> body){
            Long mentorId = body.get("mentorId");
            Long studentId = body.get("studentId");
            if(mentorId == null || studentId == null){
                return ResponseEntity.badRequest().body("MentorId or studentId is null");
            }

            try{
                User mentor = mentorGradeService.addMentor(gradeId, mentorId);
                User student = mentorGradeService.addStudent(gradeId, studentId);
                return ResponseEntity.ok().body("Mentor " + mentor + " " + " and student " + student + " added to grade " + gradeId);

            }catch(IllegalArgumentException e){
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }

    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<MentorGrade>> getGradesByTask(@PathVariable Long taskId){
        List<MentorGrade> grades = mentorGradeService.getGradesByTask(taskId);
        return ResponseEntity.ok(grades);
    }
    
}
