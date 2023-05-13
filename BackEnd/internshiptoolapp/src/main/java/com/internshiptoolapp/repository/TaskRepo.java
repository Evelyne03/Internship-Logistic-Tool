package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internshiptoolapp.entities.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task, Long> {
}
