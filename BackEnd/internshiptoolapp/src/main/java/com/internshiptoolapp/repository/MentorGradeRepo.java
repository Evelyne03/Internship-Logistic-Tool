package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.MentorGrade;

public interface MentorGradeRepo extends JpaRepository<MentorGrade, Long> {
}
