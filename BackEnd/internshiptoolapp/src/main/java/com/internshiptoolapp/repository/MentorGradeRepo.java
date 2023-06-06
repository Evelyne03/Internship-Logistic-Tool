package com.internshiptoolapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.MentorGrade;

public interface MentorGradeRepo extends JpaRepository<MentorGrade, Long> {

    List<MentorGrade> findByTask(Long taskId);

}
