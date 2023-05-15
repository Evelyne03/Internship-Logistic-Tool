package com.internshiptoolapp.entities;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "activity_id")
    private Activity activity;

    @OneToMany(mappedBy = "task")
    private List<MentorGrade> grades;

    // Getters and Setters...
}