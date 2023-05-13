package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internshiptoolapp.entities.Activity;

@Repository
public interface ActivityRepo extends JpaRepository<Activity, Long> {
}
