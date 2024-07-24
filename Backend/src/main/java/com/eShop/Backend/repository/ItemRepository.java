package com.eShop.Backend.repository;

import com.eShop.Backend.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface ItemRepository extends JpaRepository<Item, Long> {

    Optional<Item> findItemById(Long id);
    List<Item> findByItemCategory(String category);

    @Query("SELECT i FROM Item i WHERE i.itemCategory = :category")
    List<Item> findAllItemsByCategory(@Param("category") String category);
    @Query("SELECT i.filters FROM Item i")
    List<String> getAllFilters();
}
