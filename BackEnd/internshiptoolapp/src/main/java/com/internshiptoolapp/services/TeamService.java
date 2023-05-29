package com.internshiptoolapp.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.Activity;
import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.entities.User;
import com.internshiptoolapp.repository.ActivityRepo;
import com.internshiptoolapp.repository.TeamRepo;
import com.internshiptoolapp.repository.UserRepo;

@Service
public class TeamService {

    private final TeamRepo teamRepository;

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
        
        Team existingTeam = teamRepository.findByMentor(user);
        if(existingTeam != null) {
            throw new IllegalArgumentException("User is already mentor of another team");
        }

        team.setMentor(user);
        teamRepository.save(team);
        
        //user.setTeamMentored(team);
        user.setTeam(team);
        return userRepository.save(user);
    }

    public User addLeaderToTeam(Long teamId, Long userId) {
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new EntityNotFoundException("Team not found with id " + teamId));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found with id " + userId));
    
        if (!user.getRole().equalsIgnoreCase("teamleader")) {
            throw new IllegalArgumentException("User role is not 'Team Leader'");
        }

        if (team.getTeamLeader() != null) {
            throw new IllegalArgumentException("Team already has a Team Leader");
        }
        
        Team existingTeam = teamRepository.findByMentor(user);
        if(existingTeam != null) {
            throw new IllegalArgumentException("User is already Team leader of another team");
        }

        team.setTeamLeader(user);
        teamRepository.save(team);
        
        //user.setTeamLeadered(team);
        user.setTeam(team);
        return userRepository.save(user);

    }

    @Autowired
    private ActivityRepo activityRepository;

    public Activity addActivityToTeam(Long teamId, Long activityId) {
        Activity activity = activityRepository.findById(activityId).orElseThrow(() -> new EntityNotFoundException("Activity not found with id " + activityId));
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new EntityNotFoundException("Team not found with id " + teamId));
        
        activity.setTeam(team);
        return activityRepository.save(activity);
    }

    public Team createTeam(Team team) {
        return teamRepository.save(team);
    }

    public List<Team> findAllTeams() {
        return teamRepository.findAll();
    }

    public Optional<Team> findById(Long teamId) {
        return teamRepository.findById(teamId);
    }

    
    
    
    // Add methods to handle CRUD operations
}
