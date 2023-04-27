package com.internshiptoolapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entity.User;
import com.internshiptoolapp.service.UserService;


@RestController
@RequestMapping("/api/users")
public class UserController {
 
    @Autowired
    private UserService userService;
 
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
 
    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }
 
    // Other endpoints
}
