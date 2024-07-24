package com.eShop.Backend.service.impl;

import com.eShop.Backend.dto.SubFilterDTO;
import com.eShop.Backend.entity.SubFilters;
import com.eShop.Backend.repository.SubFilterRepository;
import com.eShop.Backend.service.SubFiltersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubFilterServiceImpl implements SubFiltersService {

    private final SubFilterRepository subFilterRepository;

    @Autowired
    public SubFilterServiceImpl(SubFilterRepository subFilterRepository) {
        this.subFilterRepository = subFilterRepository;
    }

    @Override
    public List<SubFilters> getAllSubFilters() {
        return subFilterRepository.findAll();
    }

    @Override
    public SubFilters getSubFilterById(Long id) {
        Optional<SubFilters> optionalSubFilters = subFilterRepository.findById(id);
        return optionalSubFilters.orElse(null);
    }

    @Override
    public SubFilters updateSubFilterd(Long id, SubFilterDTO subFilterDTO) {
        Optional<SubFilters> optionalSubFilters = subFilterRepository.findById(id);

        if(optionalSubFilters.isPresent()){
            SubFilters subFilter = optionalSubFilters.get();
            subFilter.setSubfilterName(subFilterDTO.getSubfilterName());
            return subFilterRepository.save(subFilter);
        }
        return null;
    }

    @Override
    public SubFilters createSubFilter(SubFilterDTO subFilterDTO) {
        SubFilters subfilter = new SubFilters();
        subfilter.setSubfilterName(subFilterDTO.getSubfilterName());
        return subFilterRepository.save(subfilter);
    }

    @Override
    public SubFilters getSubfilterByName(String name) {
        // implementacja
        return null;
    }

    @Override
    public void deleteSubfilters(Long id) {
        subFilterRepository.deleteById(id);
    }
}
