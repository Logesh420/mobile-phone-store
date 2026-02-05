package com.mobilephonestore.backend.service;

import com.mobilephonestore.backend.model.Cart;

public interface CartService {
    Cart getCart(String username);
    Cart addToCart(String username, Long productId, int quantity);
    Cart removeFromCart(String username, Long productId);
    void clearCart(String username);
}
