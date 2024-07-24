package com.eShop.Backend.service;


import com.eShop.Backend.dto.SubFilterDTO;
import com.eShop.Backend.entity.SubFilters;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SubFiltersService {
    List<SubFilters> getAllSubFilters();
    SubFilters getSubFilterById(Long Id);
    SubFilters createSubFilter(SubFilterDTO subFilterDTO);
    SubFilters updateSubFilterd(Long id,SubFilterDTO subFilterDTO);

    SubFilters getSubfilterByName(String name);
    void deleteSubfilters(Long id);

}
