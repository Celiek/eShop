package com.eShop.Backend.controllers;

import com.eShop.Backend.dto.UserDTO;
import com.eShop.Backend.entity.User;
import com.eShop.Backend.repository.UserRepository;
import com.eShop.Backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestParam String userName,
                                               @RequestParam String userSurname,
                                               @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date dob,
                                               @RequestParam String email,
                                               @RequestParam String password) {
        // Hashujemy hasło przed zapisaniem
//        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
//
//        try {
//            userService.createUser(user);
//            return ResponseEntity.ok("Created user");
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }

        User user = new User();
        user.setUserName(userName);
        user.setUserSurname(userSurname);
        user.setDob(dob);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));

        if (userRepository.findByEmail(email).isPresent()) {
            return ResponseEntity.badRequest().body("User already exists");
        }

        // Zapisanie użytkownika w bazie danych
        userRepository.save(user);

        return ResponseEntity.ok("Created user");
    }

    //logowanie z uzyciem UserDto
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
//        // Implementacja logowania (jeśli jest potrzebna)
//        return ResponseEntity.ok("Not implemented yet");
//    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return ResponseEntity.ok("Zalogowanio");
            } else {
                return ResponseEntity.status(401).body("Niewłaściwe dane logowania");
            }
        } else {
            return ResponseEntity.status(401).body("Niewłaściwe dane logowania");
        }
    }
}
