package com.internshiptoolapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.Task;
import com.internshiptoolapp.repository.TaskRepo;

@Service
public class TaskService {

    private final TaskRepo taskRepository;

    public TaskService(TaskRepo taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Add methods to handle CRUD operations
}
