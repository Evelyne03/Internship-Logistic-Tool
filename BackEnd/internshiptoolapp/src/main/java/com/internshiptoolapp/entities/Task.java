package com.internshiptoolapp.entities;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Boolean isCompleted;

    @Column(nullable = false , name = "activity_id")
    private long activity;

    @Column(name = "student_id")
    private long studentId;
    // Getters and Setters...

    public Task() {
    }

    public Task(String name, String description, Boolean isCompleted, long activity, long studentId) {
        this.name = name;
        this.description = description;
        this.isCompleted = isCompleted;
        this.activity = activity;
        this.studentId = studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    public long getStudentId() {
        return studentId;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setActivity(long activity) {
        this.activity = activity;
    }


    public String getName() {
        return name;
    }

    public long getActivity() {
        return activity;
    }



    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDesciption(String description) {
        this.description = description;
    }

    public Boolean getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(Boolean completed) {
        isCompleted = completed;
    }

}