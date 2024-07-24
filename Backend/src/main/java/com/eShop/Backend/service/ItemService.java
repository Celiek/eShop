package com.eShop.Backend.service;

import com.eShop.Backend.dto.ItemDTO;
import com.eShop.Backend.entity.Item;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItemService {

    List<Item> getAllItemsByCategory(String itemName);

    List<String> getAllFilters(ItemDTO itemDTO);

    List<Item> getAllItems();

    Item createItem(ItemDTO itemDTO);

    Item updateItem(Long id,ItemDTO itemDTO);

    void deleteItem(Long id);

}
