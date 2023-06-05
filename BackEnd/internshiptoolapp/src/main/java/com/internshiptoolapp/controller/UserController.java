package com.internshiptoolapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.services.TeamService;
import com.internshiptoolapp.services.UserService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    private TeamService teamService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        if(createdUser.getRole().equals("teamleader")){
            Team createdTeam = new Team();
            createdTeam.setTeamLeader(createdUser);
            createdTeam.setName(createdUser.getUsername() + "'s team");	
            createdUser.setTeam(createdTeam);  
            teamService.createTeam(createdTeam);  
        }
        return ResponseEntity.ok(createdUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> user) {
        String email = user.get("email");
        String password = user.get("password");
        try {
            User dbUser = userService.findByEmail(email)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
            if (!dbUser.getPassword().equals(password)) {
                throw new IllegalArgumentException("Invalid email or password");
            }
            return ResponseEntity.status(HttpStatus.OK).body(dbUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        try {
            userService.deleteUser(userId);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("User not found");
        }
    }

    

    // Add more methods to handle different requests
}
