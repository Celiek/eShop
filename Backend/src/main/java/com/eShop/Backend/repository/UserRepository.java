package com.eShop.Backend.repository;

import com.eShop.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    User findByUserName(String userName);

    boolean existsByEmail(String email);
}
