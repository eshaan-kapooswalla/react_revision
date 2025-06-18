package com.todo.controller;

import com.todo.model.User;
import com.todo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (!userService.isUsernameAvailable(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        if (!userService.isEmailAvailable(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User authenticatedUser = userService.authenticate(user.getUsername(), user.getPassword());
        if (authenticatedUser == null) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
        return ResponseEntity.ok(authenticatedUser);
    }
}
