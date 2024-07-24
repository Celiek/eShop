package com.eShop.Backend.service.impl;

import com.eShop.Backend.dto.UserDTO;
import com.eShop.Backend.entity.User;
import com.eShop.Backend.repository.UserRepository;
import com.eShop.Backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //zapisywannie nowego uzytkownika w bazie danych
    //z wykorzystaniem DTO DATA TRANSFER OBJECT
    @Override
    public UserDTO createUser(UserDTO userDto) {
        if(userRepository.existsByEmail(userDto.getEmail())){
            throw new IllegalArgumentException("Adres email jest już zajęty");
        }

        User user = new User();
        user.setUserName(userDto.getUserName());
        user.setUserSurname(userDto.getUserSurname());
        user.setDob(userDto.getDob());
        user.setEmail(userDto.getEmail());
        user.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));

//        if (userDto.getUserCreditCard() != null) {
//            user.setUserCreditCard(userDto.getUserCreditCard());
//        }
//
//        if (userDto.getCVV() != null) {
//            user.setCVV(userDto.getCVV());
//        }

        User savedUser = userRepository.save(user);
        return convertToUserDTO(savedUser);
    }

    private UserDTO convertToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUserName(user.getUserName());
        userDTO.setUserSurname(user.getUserSurname());
        userDTO.setDob(user.getDob());
        userDTO.setEmail(user.getEmail());
//        userDTO.setUserCreditCard(user.getUserCreditCard());
//        userDTO.setCVV(user.getCVV());
        return userDTO;
    }

    @Override
    public UserDTO getUser(String email) {
        return null;
    }

    @Override
    public UserDTO getUserById(Long userId) {
        return null;
    }

    @Override
    public UserDTO updateUser(Long userId, UserDTO userDTO) {
        return null;
    }

    @Override
    public void deleteUser(Long userId) {
    }

    @Override
    public List<UserDTO> getUsers(int page, int limit) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
