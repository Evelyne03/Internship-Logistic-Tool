package com.internshiptoolapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.repository.UserRepo;

@Service
public class UserService {

    private final UserRepo userRepository;

    public UserService(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    
    //add meth
    public User addUser(User user) {
        return userRepository.save(user);
    }

    //get meth
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }


    public User createUser(User user) {
        return userRepository.save(user);
    }


    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }


    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


}

