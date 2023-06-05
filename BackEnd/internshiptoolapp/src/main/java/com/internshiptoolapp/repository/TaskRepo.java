package com.internshiptoolapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.Task;

public interface TaskRepo extends JpaRepository<Task, Long> {

    List<Task> findByActivity(Long activityid);

}
