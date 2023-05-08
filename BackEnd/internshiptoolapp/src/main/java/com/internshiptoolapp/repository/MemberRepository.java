package com.internshiptoolapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.internshiptoolapp.entities.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{
    List<Member> findAll();
    Member findById(long id);
}
