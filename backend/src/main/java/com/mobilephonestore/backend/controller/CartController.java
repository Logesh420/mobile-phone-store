package com.mobilephonestore.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mobilephonestore.backend.model.Cart;
import com.mobilephonestore.backend.service.CartService;
import com.mobilephonestore.backend.payload.response.MessageResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    private String getCurrentUsername() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return ((UserDetails) principal).getUsername();
        } else {
            return principal.toString();
        }
    }

    @GetMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> getCart() {
        Cart cart = cartService.getCart(getCurrentUsername());
        return ResponseEntity.ok(cart);
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> addToCart(@RequestParam Long productId, @RequestParam int quantity) {
        Cart cart = cartService.addToCart(getCurrentUsername(), productId, quantity);
        return ResponseEntity.ok(cart);
    }

    @PostMapping("/remove")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> removeFromCart(@RequestParam Long productId) {
        Cart cart = cartService.removeFromCart(getCurrentUsername(), productId);
        return ResponseEntity.ok(cart);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> clearCart() {
        cartService.clearCart(getCurrentUsername());
        return ResponseEntity.ok(new MessageResponse("Cart cleared successfully!"));
    }
}
