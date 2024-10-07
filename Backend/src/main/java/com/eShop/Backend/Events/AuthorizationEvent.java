package com.eShop.Backend.Events;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.security.authorization.event.AuthorizationDeniedEvent;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AuthorizationEvent {

    @EventListener
    public void onFailure(AuthorizationDeniedEvent denied){
        log.error("Authorization failed for the user{} due to: {}",
                denied.getAuthentication().get().getName()
        ,denied.getAuthorizationDecision().toString());
    }
}
