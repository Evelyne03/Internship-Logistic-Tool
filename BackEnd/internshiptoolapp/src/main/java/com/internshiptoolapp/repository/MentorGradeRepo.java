package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internshiptoolapp.entities.MentorGrade;

@Repository
public interface MentorGradeRepo extends JpaRepository<MentorGrade, Long> {
}
