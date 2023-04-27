package com.internshiptoolapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.internshiptoolapp.entity.*;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
