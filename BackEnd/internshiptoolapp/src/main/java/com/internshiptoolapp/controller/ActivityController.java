package com.internshiptoolapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.Activity;
import com.internshiptoolapp.entities.Task;
import com.internshiptoolapp.services.ActivityService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/activities")
public class ActivityController {
    @Autowired
    private ActivityService activityService;
    
    @PostMapping("/create")
    public ResponseEntity<Activity> createTask(@RequestBody Activity activity) {
        Activity createdActivity = activityService.createActivity(activity);
        return ResponseEntity.ok(createdActivity);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Activity>> getAllActivities(){
        List<Activity> activities = activityService.getAllActivities();
        return ResponseEntity.ok(activities);
    }

    @PatchMapping("/{activityId}/addTask")
    public ResponseEntity<?> addTaskToActivity(@PathVariable Long activityId, @RequestBody Map<String, Long> body){
        Long taskId = body.get("taskId");
        if(taskId == null){
            return ResponseEntity.badRequest().body("Task id is missing");
        }
        try{
            Task task = activityService.addTaskToActivity(activityId, taskId);
            return ResponseEntity.ok(task);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
