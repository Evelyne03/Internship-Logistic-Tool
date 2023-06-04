package com.internshiptoolapp.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.Activity;
import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.repository.TeamRepo;
import com.internshiptoolapp.services.TeamService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/create")
    public ResponseEntity<Team> createTeam(@RequestBody Team team) {
        Team createdTeam = teamService.createTeam(team);
        return ResponseEntity.ok(createdTeam);
    }

    @PatchMapping("/{teamId}/addUser")
    public ResponseEntity<?> addUserToTeam(@PathVariable Long teamId, @RequestBody Map<String, Long> body) {
        Long userId = body.get("userId");
        if (userId == null) {
            return ResponseEntity.badRequest().body("userId is required");
        }
        try {
            User user = teamService.addUserToTeam(teamId, userId);
            return ResponseEntity.ok(user);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/{teamId}/addMentor")
    public ResponseEntity<?> addMentorToTeam(@PathVariable Long teamId, @RequestBody Map<String, Long> body) {
    Long userId = body.get("userId");
    if (userId == null) {
        return ResponseEntity.badRequest().body("userId is required");
    }
    try {
        User user = teamService.addMentorToTeam(teamId, userId);
        return ResponseEntity.ok(user);
    } catch (IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/{teamId}/addLeader")
    public ResponseEntity<?> addLeaderToTeam(@PathVariable Long teamId, @RequestBody Map<String, Long> body) {
        Long userId = body.get("userId");
        if (userId == null) {
            return ResponseEntity.badRequest().body("userId is required");
        }
        try {
            User user = teamService.addLeaderToTeam(teamId, userId);
            return ResponseEntity.ok(user);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/{teamId}/addActivity")
    public ResponseEntity<?> addActivityToTeam(@PathVariable Long teamId, @RequestBody Map<String, Long> body){
        Long activityId = body.get("activityId");
        if(activityId == null){
            return ResponseEntity.badRequest().body("Activity id is missing");
        }
        try{
            Activity activity = teamService.addActivityToTeam(teamId, activityId);
            return ResponseEntity.ok(activity);
        } catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<Team>> getAllTeams() {
        List<Team> teams = teamService.findAllTeams();
        return ResponseEntity.ok(teams);
    
    }

    @GetMapping("getAllNoMentor")
    public ResponseEntity<List<Team>> getAllTeamsNoMentor() {
        List<Team> teams = teamService.findAllTeamsNoMentor();
        return ResponseEntity.ok(teams);
    }

     @GetMapping("/{teamId}/users")
    public ResponseEntity<List<User>> getUsersByTeamId(@PathVariable Long teamId) {
        Optional<Team> teamOptional = teamService.findById(teamId);
        List<User> users = teamOptional.get().getMembers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{teamId}")
    public ResponseEntity<Team> getTeamById(@PathVariable Long teamId) {
        Optional<Team> teamOptional = teamService.findById(teamId);
        Team team = teamOptional.get();
        return ResponseEntity.ok(team);
    }

    @GetMapping("/{teamId}/activities")
    public ResponseEntity<List<Activity>> getActivitiesByTeamId(@PathVariable Long teamId) {
    Optional<Team> teamOptional = teamService.findById(teamId);
    List<Activity> activities = teamOptional.get().getActivities();
    return ResponseEntity.ok(activities);
}


}