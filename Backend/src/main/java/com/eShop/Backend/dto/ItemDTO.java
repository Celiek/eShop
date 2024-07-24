package com.eShop.Backend.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Data
public class ItemDTO implements Serializable {
    private Long itemId;
    private List<String> filters;
    private String itemCondition;
    private String itemName;
    private String itemPostPlace;
    private Date itemPostDate;
    private String itemPostEnd;
    private String auctionType;
}
