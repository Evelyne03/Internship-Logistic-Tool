package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.Task;

public interface TaskRepo extends JpaRepository<Task, Long> {
}
