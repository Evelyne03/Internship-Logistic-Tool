package com.internshiptoolapp.services;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.repository.TeamRepo;
import com.internshiptoolapp.repository.UserRepo;

@Service
public class TeamService {

    private final TeamRepo teamRepository;

    @Autowired
    public TeamService(TeamRepo teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Autowired
    private UserRepo userRepository;

    public User addUserToTeam(Long teamId, Long userId) {
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new EntityNotFoundException("Team not found with id " + teamId));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found with id " + userId));
    
        if(!user.getRole().equalsIgnoreCase("member")) {
            throw new IllegalArgumentException("User role is not 'member'");
        }
    
        user.setTeam(team);
        return userRepository.save(user);
    }
    
    public User addMentorToTeam(Long teamId, Long userId) {
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new EntityNotFoundException("Team not found with id " + teamId));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found with id " + userId));
    
        if (!user.getRole().equalsIgnoreCase("mentor")) {
            throw new IllegalArgumentException("User role is not 'mentor'");
        }
    
        if (team.getMentor() != null) {
            throw new IllegalArgumentException("Team already has a mentor");
        }
    
        team.setMentor(user);
        teamRepository.save(team);
        
        user.setTeamMentored(team);
        return userRepository.save(user);
    }

    public Team createTeam(Team team) {
        return teamRepository.save(team);
    }

    public List<Team> findAllTeams() {
        return teamRepository.findAll();
    }
    
    // Add methods to handle CRUD operations
}
