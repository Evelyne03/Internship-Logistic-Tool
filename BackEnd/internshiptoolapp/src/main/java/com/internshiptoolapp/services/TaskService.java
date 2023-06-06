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

    public List<Task> getTasksByActivityId(Long activityId) {
        return taskRepository.findByActivity(activityId);
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public List<Task> getTaskByUserId(Long studentId) {
        return taskRepository.findByStudentId(studentId);
    }

    public void completeTask(Long taskId) {
        Task task = taskRepository.findById(taskId).orElseThrow(() -> new IllegalArgumentException("Invalid task Id:" + taskId));
        task.setIsCompleted(true);
        taskRepository.save(task);
    }
    

    // Add methods to handle CRUD operations
}
