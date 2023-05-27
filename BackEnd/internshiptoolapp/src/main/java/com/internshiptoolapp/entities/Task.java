package com.internshiptoolapp.entities;

import java.util.Date;
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

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "activity_id")
    private Activity activity;

    @OneToMany(mappedBy = "task")
    private List<MentorGrade> grades;

    // Getters and Setters...

    public Task() {
    }

    public Task(String name, String description, Activity activity) {
        this.name = name;
        this.description = description;
        this.activity = activity;
    }

    public Task(String name, String description, Activity activity, List<MentorGrade> grades) {
        this.name = name;
        this.description = description;
        this.activity = activity;
        this.grades = grades;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public void setGrades(List<MentorGrade> grades) {
        this.grades = grades;
    }

    public String getName() {
        return name;
    }

    public Activity getActivity() {
        return activity;
    }

    public List<MentorGrade> getGrades() {
        return grades;
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