package com.eShop.Backend.repository;

import com.eShop.Backend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByEmail(String email);

    Customer findByUserName(String userName);

    boolean existsByEmail(String email);
}
