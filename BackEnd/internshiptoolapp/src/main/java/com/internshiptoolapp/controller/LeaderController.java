package com.internshiptoolapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.Leader;

@RestController
@RequestMapping("/Leader")
public class LeaderController extends UserController<Leader> {
    
}
