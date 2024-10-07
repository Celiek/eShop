package com.eShop.Backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Set;

@Data
@Entity
@Component
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
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
    @JsonProperty(access =  JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String userCreditCard;
    private String CVV;
    @CreationTimestamp
    @Column(updatable = false, name = "created_at")
    private Date createdAt;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updatedAt;

    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Authority> authorities;

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

}
