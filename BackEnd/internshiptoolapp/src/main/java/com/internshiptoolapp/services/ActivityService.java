package com.internshiptoolapp.services;

import org.springframework.stereotype.Service;

import com.internshiptoolapp.repository.ActivityRepo;

@Service
public class ActivityService {

    private final ActivityRepo activityRepository;

    public ActivityService(ActivityRepo activityRepository) {
        this.activityRepository = activityRepository;
    }

    // Add methods to handle CRUD operations
}
