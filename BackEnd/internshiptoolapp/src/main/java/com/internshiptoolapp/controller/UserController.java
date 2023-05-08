package com.internshiptoolapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.services.UserService;

@RequestMapping("/User")
@RestController
public abstract class UserController<T extends User> {

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
    public ResponseEntity<T> create(@RequestBody T user) {
        final T createdUser = userService.add(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }
}
