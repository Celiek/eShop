package com.eShop.Backend.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "subfilters")
public class SubFilters {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subfiltersID;

    private String subfilterName;
}
