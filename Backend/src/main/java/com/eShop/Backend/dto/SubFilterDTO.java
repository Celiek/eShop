package com.eShop.Backend.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class SubFilterDTO implements Serializable {

    private Long idSubfilters;

    private String subfilterName;

}
