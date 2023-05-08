package com.internshiptoolapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.UserEntity;

public interface UserRepository<T extends UserEntity> extends JpaRepository<T, Long> {
    List<T> findAll();
    T findById(long id);
}
