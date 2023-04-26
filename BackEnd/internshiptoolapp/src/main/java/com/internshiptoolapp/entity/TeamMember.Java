package com.internshiptoolapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TeamMember extends User {
    
    protected TeamMember() {super();}
    public TeamMember(long id, String username, String email) {
        super(id, username, email);
    }

    public void viewActivity(){
        //TODO: implement
    };
    public void viewData(){
        //TODO: implement
    };
    public void teamEntryRequest(){
        //TODO: implement
    };
    public void teamLeaveRequest(){
        //TODO: implement
    };
}