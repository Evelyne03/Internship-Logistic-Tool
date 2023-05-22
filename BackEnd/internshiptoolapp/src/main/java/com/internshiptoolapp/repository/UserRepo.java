package com.internshiptoolapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.User;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}