package com.internshiptoolapp.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "mentor_grades")
public class MentorGrade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

    @ManyToOne
    @JoinColumn(name = "mentor_id")
    private User mentor;

    @Column(nullable = false , name = "task_id")
    private long task;

    @Column(nullable = false)
    private int grade;

    @Column(nullable = true)
    private String feedback;

    // Getters and Setters...

    public Long getId() {
        return id;
    }
    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getStudent() {
        return student;
    }

    public void setStudent(User user) {
        this.student = user;
    }

    public User getMentor() {
        return mentor;
    }

    public void setMentor(User user) {
        this.mentor = user;
    }

    public long getTask() {
        return task;
    }

    public void setTask(long taskId) {
        this.task = taskId;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
            this.grade = grade;
    }

    public MentorGrade() {
    }

    public MentorGrade(User student, User mentor, long task, int grade) {
        this.student = student;
        this.mentor = mentor;
        this.task = task;
        this.grade = grade;
    }
}