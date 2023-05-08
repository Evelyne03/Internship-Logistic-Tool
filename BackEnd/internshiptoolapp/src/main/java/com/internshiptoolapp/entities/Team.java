package com.internshiptoolapp.entities;

import javax.persistence.*;

@Entity
@Table()
public class Team {
   
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private long leaderId;

    protected Team() {}

    public Team(String name, long leaderId) {
        this.name = name;
        this.leaderId = leaderId;
    }

    public long getLeaderId() {
        return this.leaderId;
    }

    public String getName() {
        return this.name;
    }
}
