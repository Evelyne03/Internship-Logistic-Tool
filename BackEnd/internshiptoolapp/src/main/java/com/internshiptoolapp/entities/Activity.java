package com.internshiptoolapp.entities;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "activities")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    // Getters and Setters...
    public Activity() {
    }

    public Activity(String name, String description, Team team, List<Task> tasks) {
        this.name = name;
        this.description = description;
        this.team = team;
    }

    //getters and setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() { return description; }

    public Team getTeam() {
        return team;
    }
    public void setId(Long id) { this.id = id; }

    public void setName(String name) { this.name = name; }

    public void setDescription(String description) { this.description = description; }

    public void setTeam(Team team) {
        this.team = team;
    }

}