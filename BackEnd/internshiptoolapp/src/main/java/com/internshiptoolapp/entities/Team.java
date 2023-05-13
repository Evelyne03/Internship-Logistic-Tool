package com.internshiptoolapp.entities;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "team_leader_id")
    private User teamLeader;

    @OneToOne
    @JoinColumn(name = "mentor_id")
    private User mentor;

    @OneToMany(mappedBy = "team")
    private List<User> members;

    @OneToMany(mappedBy = "team")
    private List<Activity> activities;

    // Getters and Setters...
}