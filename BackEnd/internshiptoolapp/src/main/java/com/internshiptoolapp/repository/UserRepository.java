package com.internshiptoolapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.User;

public interface UserRepository<T extends User> extends JpaRepository<T, Long> {
    List<T> findAll();
}
