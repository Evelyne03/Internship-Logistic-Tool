package com.internshiptoolapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.MentorGrade;
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
    
}
