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

    

    @GetMapping("/task/{taskId}")
    public ResponseEntity<MentorGrade> getGradesByTask(@PathVariable Long taskId){
        MentorGrade grade = mentorGradeService.getGradeByTask(taskId);
        return ResponseEntity.ok(grade);
    }


    @GetMapping("/{id}")
    public ResponseEntity<MentorGrade> getGradeById(@PathVariable Long id){
        MentorGrade grade = mentorGradeService.getGradeById(id);
        return ResponseEntity.ok(grade);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<?> updateGradeAndFeedback(@PathVariable Long id, @RequestBody Map<String, String> body){
        int grade = Integer.parseInt(body.get("grade"));  
        String feedback = body.get("feedback").toString();
        mentorGradeService.updateGradeAndFeedback(id, grade, feedback);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/assign")
    public ResponseEntity<?> assignMentorAndStudent(@PathVariable Long id, @RequestBody Map<String, String> body){
        Long mentorId = Long.parseLong(body.get("mentorId"));
        Long studentId = Long.parseLong(body.get("studentId"));
        mentorGradeService.assignMentorAndStudent(id, mentorId, studentId);
        return ResponseEntity.ok().build();
    }

    
}
