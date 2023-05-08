package com.internshiptoolapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.UserEntity;
import com.internshiptoolapp.repository.UserRepository;

@Service
public class UserService<T extends UserEntity> {

    @Autowired
    private UserRepository<T> userRepository;

    public T add(T user) {
        return userRepository.save(user);
    }

    public T findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<T> findAll() {
        return userRepository.findAll();
    }
}
