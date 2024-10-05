package com.eShop.Backend.config;

import com.eShop.Backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EShopUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public UserDetails loadByUserName(String username) throws UsernameNotFoundException {

    }
}
