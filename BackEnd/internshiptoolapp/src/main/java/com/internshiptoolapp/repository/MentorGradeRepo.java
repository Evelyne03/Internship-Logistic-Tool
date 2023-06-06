package com.internshiptoolapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.MentorGrade;

public interface MentorGradeRepo extends JpaRepository<MentorGrade, Long> {

    Optional<MentorGrade> findByTask(Long taskId);

}
