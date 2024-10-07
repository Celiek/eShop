package com.eShop.Backend.controllers;

import com.eShop.Backend.dto.UserDTO;
import com.eShop.Backend.entity.Customer;
import com.eShop.Backend.repository.CustomerRepository;
import com.eShop.Backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;
    @Autowired
    CustomerRepository customerRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDto) {

        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));

        try {
            userService.createUser(userDto);
            return ResponseEntity.ok("Created user");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    //logowanie z uzyciem UserDto
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
//        // Implementacja logowania (jeśli jest potrzebna)
//        return ResponseEntity.ok("Not implemented yet");
//    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        Optional<Customer> optionalUser = customerRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            Customer customer = optionalUser.get();
            if (passwordEncoder.matches(password, customer.getPassword())) {
                return ResponseEntity.ok("Zalogowanio");
            } else {
                return ResponseEntity.status(401).body("Niewłaściwe dane logowania");
            }
        } else {
            return ResponseEntity.status(401).body("Niewłaściwe dane logowania");
        }
    }


}
