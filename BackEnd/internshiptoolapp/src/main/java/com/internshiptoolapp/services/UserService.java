package com.internshiptoolapp.services;

import java.util.List;

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
}

