package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.Team;
import com.internshiptoolapp.entities.User;

public interface TeamRepo extends JpaRepository<Team, Long> {
    Team findByMentor(User user);
}