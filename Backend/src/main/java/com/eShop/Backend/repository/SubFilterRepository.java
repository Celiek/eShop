package com.eShop.Backend.repository;

import com.eShop.Backend.entity.Item;
import com.eShop.Backend.entity.SubFilters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubFilterRepository extends JpaRepository<SubFilters, Long> {
    Optional<SubFilters> findSubFiltersBySubfiltersID(Long SubfiltersID);

}
