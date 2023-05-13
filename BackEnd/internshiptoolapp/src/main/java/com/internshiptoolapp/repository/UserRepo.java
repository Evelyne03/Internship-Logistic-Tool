package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internshiptoolapp.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
}