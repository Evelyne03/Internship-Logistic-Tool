package com.internshiptoolapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.repository.MentorGradeRepo;

@Service
public class MentorGradeService {

    private final MentorGradeRepo mentorGradeRepository;

    @Autowired
    public MentorGradeService(MentorGradeRepo mentorGradeRepository) {
        this.mentorGradeRepository = mentorGradeRepository;
    }

    // Add methods to handle CRUD operations
}
