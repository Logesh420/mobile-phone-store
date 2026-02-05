package com.mobilephonestore.backend.service.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mobilephonestore.backend.model.Cart;
import com.mobilephonestore.backend.model.CartItem;
import com.mobilephonestore.backend.model.Order;
import com.mobilephonestore.backend.model.OrderItem;
import com.mobilephonestore.backend.model.User;
import com.mobilephonestore.backend.repository.OrderRepository;
import com.mobilephonestore.backend.repository.UserRepository;
import com.mobilephonestore.backend.service.CartService;
import com.mobilephonestore.backend.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartService cartService;
    
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public Order placeOrder(String username) {
        Cart cart = cartService.getCart(username);
        List<CartItem> cartItems = cart.getItems();

        if (cartItems.isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        Order order = new Order();
        order.setUser(cart.getUser());
        order.setOrderDate(LocalDateTime.now());
        order.setStatus("COMPLETED"); // Simplified for now

        BigDecimal totalAmount = BigDecimal.ZERO;

        for (CartItem cartItem : cartItems) {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setPrice(cartItem.getProduct().getPrice());
            
            order.getItems().add(orderItem);
            
            BigDecimal itemTotal = cartItem.getProduct().getPrice().multiply(new BigDecimal(cartItem.getQuantity()));
            totalAmount = totalAmount.add(itemTotal);
        }

        order.setTotalAmount(totalAmount);
        
        Order savedOrder = orderRepository.save(order);
        
        cartService.clearCart(username);
        
        return savedOrder;
    }

    @Override
    public List<Order> getUserOrders(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found: " + username));
        return orderRepository.findByUserId(user.getId());
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
