package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.User;

public interface UserRepo extends JpaRepository<User, Long> {   
}