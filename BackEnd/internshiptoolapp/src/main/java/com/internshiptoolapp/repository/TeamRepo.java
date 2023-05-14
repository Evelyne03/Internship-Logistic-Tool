package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.Team;

public interface TeamRepo extends JpaRepository<Team, Long> {
}