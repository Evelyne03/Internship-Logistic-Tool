package com.internshiptoolapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.Leader;
import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.exceptions.CustomException;
import com.internshiptoolapp.repository.TeamRepository;
import com.internshiptoolapp.repository.UserRepository;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private UserRepository<Leader> userRepository;

    public Team createTeam(Team team) {
        if (userRepository.findById(team.getLeaderId()) == null) {
            throw new CustomException(HttpStatus.BAD_REQUEST,
                    "Leader with id " + team.getLeaderId() + " does not exist");
        }
        if (teamRepository.findByName(team.getName()) != null) {
            throw new CustomException(HttpStatus.BAD_REQUEST, "The name is allReady used");
        }
        return teamRepository.save(team);
    }

    public Team findById(Long id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team findByName(String name) {
        return teamRepository.findByName(name);
    }

    public List<Team> findAll() {
        return teamRepository.findAll();
    }

    public Leader getTeamLeader(long teamId) {
        Team team = teamRepository.findById(teamId).orElse(null);
        Optional<Leader> leader = userRepository.findById(team.getLeaderId());
        return leader.orElseThrow(() -> new CustomException(HttpStatus.NOT_FOUND, "Leader not found"));
    }
}
