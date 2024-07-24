package com.eShop.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Data
@Entity
@Component
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Column(name = "userName")
    private String userName;
    private String userSurname;
    private Date dob;
    private String email;
    private String password;
    private String userCreditCard;
    private String CVV;

    public User(String userName, String userSurname, Date dob, String email, String password) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.dob = dob;
        this.email = email;
        this.password = password;  
    }
}
