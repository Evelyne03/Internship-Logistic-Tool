package com.internshiptoolapp.services;

import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.swing.text.html.parser.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.Activity;
import com.internshiptoolapp.entities.Task;
import com.internshiptoolapp.repository.ActivityRepo;
import com.internshiptoolapp.repository.TaskRepo;

@Service
public class ActivityService {

    private final ActivityRepo activityRepository;

    public ActivityService(ActivityRepo activityRepository) {
        this.activityRepository = activityRepository;
    }

    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    @Autowired
    private TaskRepo taskRepository;

    public com.internshiptoolapp.entities.Task addTaskToActivity(Long activityId, Long taskId) {
        Activity activity = activityRepository.findById(activityId).orElseThrow(()-> new EntityNotFoundException("Activity not found with id " + activityId));
        Task task = taskRepository.findById(taskId).orElseThrow(()-> new EntityNotFoundException("Task not found with id " + taskId));

        task.setActivity(activity);
        return taskRepository.save(task);
    }

    // Add methods to handle CRUD operations
}
