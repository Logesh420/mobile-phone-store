package com.mobilephonestore.backend.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mobilephonestore.backend.model.Cart;
import com.mobilephonestore.backend.model.CartItem;
import com.mobilephonestore.backend.model.Product;
import com.mobilephonestore.backend.model.User;
import com.mobilephonestore.backend.repository.CartItemRepository;
import com.mobilephonestore.backend.repository.CartRepository;
import com.mobilephonestore.backend.repository.ProductRepository;
import com.mobilephonestore.backend.repository.UserRepository;
import com.mobilephonestore.backend.service.CartService;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    
    @Autowired
    private CartItemRepository cartItemRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private ProductRepository productRepository;

    @Override
    @Transactional
    public Cart getCart(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found: " + username));
        
        return cartRepository.findByUserId(user.getId())
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });
    }

    @Override
    @Transactional
    public Cart addToCart(String username, Long productId, int quantity) {
        Cart cart = getCart(username);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found: " + productId));

        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(item -> item.getProduct().getId().equals(productId))
                .findFirst();

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + quantity);
            cartItemRepository.save(item);
        } else {
            CartItem newItem = new CartItem();
            newItem.setCart(cart);
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            cart.getItems().add(newItem);
            cartItemRepository.save(newItem);
        }

        return cartRepository.save(cart);
    }

    @Override
    @Transactional
    public Cart removeFromCart(String username, Long productId) {
        Cart cart = getCart(username);
        
        Optional<CartItem> itemToRemove = cart.getItems().stream()
                .filter(item -> item.getProduct().getId().equals(productId))
                .findFirst();

        if (itemToRemove.isPresent()) {
            CartItem item = itemToRemove.get();
            cart.getItems().remove(item);
            cartItemRepository.delete(item);
        }
        
        return cartRepository.save(cart);
    }

    @Override
    @Transactional
    public void clearCart(String username) {
        Cart cart = getCart(username);
        cart.getItems().clear();
        cartRepository.save(cart);
    }
}
