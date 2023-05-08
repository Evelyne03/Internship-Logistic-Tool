package com.internshiptoolapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internshiptoolapp.entities.Member;

@RestController
@RequestMapping("/Member")
public class MemberController extends UserController<Member>{

}
