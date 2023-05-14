package com.internshiptoolapp.entities;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name = "task_id")
    private Task task;

    @Column(nullable = false)
    private int grade;

    // Getters and Setters...
}