package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.Team;

public interface TeamRepository extends JpaRepository<Team, Long>{

    Team findByName(String name);
    
}
