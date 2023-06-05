package com.internshiptoolapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.MentorGrade;
import com.internshiptoolapp.entities.Task;
import com.internshiptoolapp.services.MentorGradeService;
import com.internshiptoolapp.services.TaskService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private MentorGradeService mentorGradeService;

    @PostMapping("/create")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task createdTask = taskService.createTask(task);
        MentorGrade grade = new MentorGrade();
        grade.setTask(createdTask.getId());
        grade.setGrade(-1);
        grade.setMentor(null);
        grade.setStudent(null);
        mentorGradeService.createGrade(grade);
        return ResponseEntity.ok(createdTask);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Task>> getAllTasks(){
        List<Task> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    } 

    @GetMapping("/{activityId}")
    public ResponseEntity<List<Task>> getTasksByActivityId(@PathVariable Long activityId){
        List<Task> tasks = taskService.getTasksByActivityId(activityId);
        return ResponseEntity.ok(tasks);
    }

    @DeleteMapping("/delete/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable Long taskId){
        try{
            taskService.deleteTask(taskId);
            return ResponseEntity.ok().build();
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
