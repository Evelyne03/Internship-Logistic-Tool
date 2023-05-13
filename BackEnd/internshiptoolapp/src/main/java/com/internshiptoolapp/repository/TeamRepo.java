package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internshiptoolapp.entities.Team;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {
}