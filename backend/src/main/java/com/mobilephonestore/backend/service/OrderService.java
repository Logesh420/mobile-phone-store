package com.mobilephonestore.backend.service;

import java.util.List;

import com.mobilephonestore.backend.model.Order;

public interface OrderService {
    Order placeOrder(String username);
    List<Order> getUserOrders(String username);
    List<Order> getAllOrders(); // For Admin
}
