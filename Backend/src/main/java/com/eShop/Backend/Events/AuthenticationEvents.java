package com.eShop.Backend.Events;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.event.AbstractAuthenticationFailureEvent;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AuthenticationEvents {

    public void onSuccess(AuthenticationSuccessEvent successEvent){
        log.info("Login successfull for the user: {}", successEvent.getAuthentication().getName());
    }

    public void onFailure(AbstractAuthenticationFailureEvent failure){
        log.error("Login failed for the user: {} due to: {}",failure.getAuthentication().getName(),
                failure.getException().getMessage());
    }
}
