package com.eShop.Backend.service.impl;

import com.eShop.Backend.dto.UserDTO;
import com.eShop.Backend.entity.Customer;
import com.eShop.Backend.repository.CustomerRepository;
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
    private final CustomerRepository customerRepository;
    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //zapisywannie nowego uzytkownika w bazie danych
    //z wykorzystaniem DTO DATA TRANSFER OBJECT
    @Override
    public UserDTO createUser(UserDTO userDto) {
        if(customerRepository.existsByEmail(userDto.getEmail())){
            throw new IllegalArgumentException("Adres email jest już zajęty");
        }

        Customer customer = new Customer();
        customer.setUserName(userDto.getUserName());
        customer.setUserSurname(userDto.getUserSurname());
        customer.setDob(userDto.getDob());
        customer.setEmail(userDto.getEmail());
        customer.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));

//        if (userDto.getUserCreditCard() != null) {
//            customer.setUserCreditCard(userDto.getUserCreditCard());
//        }
//
//        if (userDto.getCVV() != null) {
//            customer.setCVV(userDto.getCVV());
//        }

        Customer savedCustomer = customerRepository.save(customer);
        return convertToUserDTO(savedCustomer);
    }

    private UserDTO convertToUserDTO(Customer customer) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUserName(customer.getUserName());
        userDTO.setUserSurname(customer.getUserSurname());
        userDTO.setDob(customer.getDob());
        userDTO.setEmail(customer.getEmail());
//        userDTO.setUserCreditCard(customer.getUserCreditCard());
//        userDTO.setCVV(customer.getCVV());
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
