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
    
    public Member addMember(Member member) {
        return memberRepository.save(member);
    }

    public Member findById(Long id) {
        return memberRepository.findById(id).orElse(null);
    }

    public List<Member> findAll() {
        return memberRepository.findAll();
    }

}
