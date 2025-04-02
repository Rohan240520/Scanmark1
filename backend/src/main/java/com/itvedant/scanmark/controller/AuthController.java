package com.itvedant.scanmark.controller;

import com.itvedant.scanmark.dto.LoginRequest;
import com.itvedant.scanmark.dto.LoginResponse;
import com.itvedant.scanmark.serviceImplementation.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = authService.login(loginRequest);
        return ResponseEntity.ok(response);
    }
}
