package com.internshiptoolapp.entities;

import javax.persistence.*;

@Entity
@Table(name = "[user]")
public abstract class User {

    private enum userType {
        STUDENT, MENTOR,
    }

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private userType type;

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public userType getType() {
        return type;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setType(userType type) {
        this.type = type;
    }
}