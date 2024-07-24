package com.eShop.Backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Table(name = "items")
@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private List<String> filters;
    private String itemCondition;
    private String itemName;
    private String itemPostPlace;
    private Date itemPostDate;
    private String itemPostEnd;
    private String auctionType;
    private String itemCategory;
    @Lob
    private byte[] itemImage;

}
