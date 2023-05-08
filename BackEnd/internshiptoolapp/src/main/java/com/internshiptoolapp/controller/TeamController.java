package com.internshiptoolapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.Leader;
import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.services.TeamService;

@RestController
@RequestMapping("/Team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping("/getTeamLeader/{teamId}")
    public Leader getTeamLeader(@PathVariable("teamId") Long id) {
        return teamService.getTeamLeader(id);
    }

    @GetMapping("/getTeam/{teamId}")
    public Team getTeam(@PathVariable("teamId") Long id) {
        return teamService.findById(id);
    }

    @GetMapping("/getAll")
    public List<Team> getAllTeams() {
        return teamService.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Team> createTeam(@RequestBody Team team) {
        Team teamCreated = teamService.createTeam(team);
        return ResponseEntity.status(HttpStatus.CREATED).body(teamCreated);
    }
}
