package com.eShop.Backend.entity;

import com.eShop.Backend.entity.UserStuff.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Component
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Getter
    @Column(name = "userName")
    private String userName;
    private String Nick;
    private String userSurname;
    private Date dob;
    private String email;
    private String password;
    private String userCreditCard;
    private String CVV;
    @CreationTimestamp
    @Column(updatable = false, name = "created_at")
    private Date createdAt;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updatedAt;
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER)
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return List.of();
    }

    public Customer(String userName, String userSurname, Date dob, String email, String password) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.dob = dob;
        this.email = email;
        this.password = password;  
    }

    public String toString(){
        return "Customer{" +
                "id=" + userId +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }

    public String getPassword() {
        return password;
    }


    public String getUsername() {
        return email;
    }


    public boolean isAccountNonExpired() {
        return true;
    }


    public boolean isAccountNonLocked() {
        return true;
    }


    public boolean isCredentialsNonExpired() {
        return true;
    }


    public boolean isEnabled() {
        return true;
    }

}
