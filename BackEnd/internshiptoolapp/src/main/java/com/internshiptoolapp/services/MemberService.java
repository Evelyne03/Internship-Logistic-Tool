package com.internshiptoolapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internshiptoolapp.entities.Member;
import com.internshiptoolapp.repository.MemberRepository;

@Service
public class MemberService {
    
    @Autowired
    private MemberRepository memberRepository;
    
    public Member addTeamMember(Member member) {
        return memberRepository.save(member);
    }

    public Member getTeamMemberById(long id) {
        return memberRepository.findById(id).orElse(null);
    }

    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    public Member addStudent(Member member) {
        return memberRepository.save(member);
    }
}
