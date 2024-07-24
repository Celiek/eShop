package com.eShop.Backend.service.impl;

import com.eShop.Backend.dto.ItemDTO;
import com.eShop.Backend.entity.Item;
import com.eShop.Backend.repository.ItemRepository;
import com.eShop.Backend.service.ItemService;
import com.eShop.Backend.entity.SubFilters;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepo;

    private final SubFilters subfilterRepo;

    public ItemServiceImpl(ItemRepository itemRepo, SubFilters subfilterRepo) {
        this.itemRepo = itemRepo;
        this.subfilterRepo = subfilterRepo;
    }

    //tutaj trzeba poprawić
    @Override
    public List<Item> getAllItemsByCategory(String category) {
        return itemRepo.findAllItemsByCategory(category);
    }

    @Override
    public List<String> getAllFilters(ItemDTO itemDTO) {
        return itemRepo.getAllFilters();
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepo.findAll();
    }

    @Override
    public Item createItem(ItemDTO itemDTO) {
        LocalDate endDate = LocalDate.now().plusWeeks(2);
        Item item = new Item();
        item.setItemCondition(itemDTO.getItemCondition());
        item.setItemName(itemDTO.getItemName());
        item.setItemPostPlace(itemDTO.getItemPostPlace());
        item.setItemPostEnd(String.valueOf(java.sql.Date.valueOf(endDate)));
        return itemRepo.save(item);
    }

    @Override
    public Item updateItem(Long id, ItemDTO itemDTO) {
        Optional<Item> optionalItem = itemRepo.findById(id);
        if (optionalItem.isPresent()) {
            Item item = optionalItem.get();
            item.setFilters(itemDTO.getFilters());
            item.setItemCondition(itemDTO.getItemCondition());
            item.setItemName(itemDTO.getItemName());
            item.setItemPostPlace(itemDTO.getItemPostPlace());
            item.setItemPostEnd(itemDTO.getItemPostEnd());
            item.setAuctionType(itemDTO.getAuctionType());
            return itemRepo.save(item);
        } else {
            return null;
        }
    }

    @Override
    public void deleteItem(Long id) {
        itemRepo.deleteById(id);
    }
}
