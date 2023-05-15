package com.internshiptoolapp.entities;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String role;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @OneToOne(mappedBy = "teamLeader")
    private Team teamLed;

    @OneToOne(mappedBy = "mentor")
    private Team teamMentored;

    @OneToMany(mappedBy = "student")
    private List<MentorGrade> gradesAsStudent;

    @OneToMany(mappedBy = "mentor")
    private List<MentorGrade> gradesAsMentor;

    // Getters and Setters...

    public User() {
    }

     public User(String username, String password, String email, String role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
     }

     // Getters and Setters...
     public Long getId() {
         return id;
     }

     public void setId(Long id) {
         this.id = id;
     }

     public String getUsername() {
         return username;
     }

     public void setUsername(String username) {
         this.username = username;
     }

     public String getPassword() {
         return password;
     }

     public void setPassword(String password) {
         this.password = password;
     }

     public String getEmail() {
         return email;
     }

     public void setEmail(String email) {
         this.email = email;
     }

     public String getRole() {
         return role;
     }

     public void setRole(String role) {
         this.role = role;
     }

     public void setTeam(Team team) {
        this.team = team;
    }

    @JsonIgnore
    public Team getTeam() {
        return team;
    }

    public Long getTeamId() {
        return this.team != null ? this.team.getId() : 0;
    }
    

    public void setTeamMentored(Team teamMentored) {
        this.teamMentored = teamMentored;
    }
}