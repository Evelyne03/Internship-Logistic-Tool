package com.internshiptoolapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.repository.ActivityRepo;

@Service
public class ActivityService {

    private final ActivityRepo activityRepository;

    @Autowired
    public ActivityService(ActivityRepo activityRepository) {
        this.activityRepository = activityRepository;
    }

    // Add methods to handle CRUD operations
}
