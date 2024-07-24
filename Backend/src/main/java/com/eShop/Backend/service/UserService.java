package com.eShop.Backend.service;

import com.eShop.Backend.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService extends UserDetailsService {

        UserDTO createUser(UserDTO userDto);
        UserDTO getUser(String email);
        UserDTO getUserById(Long userId);
        UserDTO updateUser(Long userId, UserDTO userDTO);
        void deleteUser(Long userId);
        List<UserDTO> getUsers(int page, int limit);

}
