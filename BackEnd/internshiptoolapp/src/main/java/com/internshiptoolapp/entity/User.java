package com.internshiptoolapp.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    
    @Id
    private long id;

    private String username;
    private String email;

    //default constructor
    protected User() {}

    //constructor
    public User(long id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email=email;
    }

    //getters

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }    

    public void Login(String email, String password) {
        System.out.println("Login being called");
    }
}