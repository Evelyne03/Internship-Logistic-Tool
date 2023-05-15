package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.internshiptoolapp.entities.Activity;

public interface ActivityRepo extends JpaRepository<Activity, Long> {
}
