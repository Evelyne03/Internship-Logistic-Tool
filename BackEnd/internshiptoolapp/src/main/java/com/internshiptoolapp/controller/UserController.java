package com.internshiptoolapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.internshiptoolapp.entities.UserEntity;
import com.internshiptoolapp.services.UserService;

@RestController
public abstract class UserController<T extends UserEntity> {

    @Autowired
    private UserService<T> userService;

    @GetMapping("/getAll")
    public List<T> getAll() {
        return userService.findAll();
    }

    @GetMapping("/get/{id}")
    public T get(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping("/create")
    public T create(@RequestBody T user) {
        return userService.add(user);
    }
}
