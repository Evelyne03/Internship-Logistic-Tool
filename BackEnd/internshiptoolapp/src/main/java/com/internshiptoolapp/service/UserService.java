package com.internshiptoolapp.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entity.*;
import com.internshiptoolapp.repository.UserRepository;

@Service
public class UserService {
 
    @Autowired
    private UserRepository userRepository;
 
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
 
    public void addUser(User user) {
        //userRepository.save(user);
    }
 
    // Other methods
}
