package com.internshiptoolapp.entities;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToOne
    @JoinColumn(name = "team_leader_id")
    private User teamLeader;

    @OneToOne
    @JoinColumn(name = "mentor_id")
    private User mentor;

    @JsonManagedReference
    @OneToMany(mappedBy = "team")
    private List<User> members;

    @OneToMany(mappedBy = "team")
    private List<Activity> activities;


    // Getters and Setters...
    public Team() {
    }
    
    public Team(String name, User teamLeader, User mentor) {
        this.name = name;
        this.teamLeader = teamLeader;
        this.mentor = mentor;
    }

    // Getters and Setters...
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getTeamLeader() {
        return teamLeader;
    }

    public void setTeamLeader(User teamLeader) {
        this.teamLeader = teamLeader;
    }

    public User getMentor() {
        return mentor;
    }

    public void setMentor(User mentor) {
        this.mentor = mentor;
    }

    public List<User> getMembers() {
        return members.stream()
                  .filter(user -> !user.getRole().equalsIgnoreCase("mentor"))
                  .collect(Collectors.toList());
    }

    public void setMembers(List<User> members) {
        for (User member : members) {
            member.setTeam(this);
        }
        this.members = members;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    
}