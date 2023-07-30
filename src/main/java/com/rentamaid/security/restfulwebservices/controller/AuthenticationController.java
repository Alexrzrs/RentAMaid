/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/RestController.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.AuthenticationResponse;
import com.rentamaid.security.restfulwebservices.entity.RegisterRequest;
import com.rentamaid.security.restfulwebservices.entity.Role;
import com.rentamaid.security.restfulwebservices.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author oscarcortes
 */
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;
    
    // REGISTER
    
    @PostMapping("/registerClearer")
    public ResponseEntity<AuthenticationResponse> registerClearer(@RequestBody RegisterRequest request) {
        
        request.setRole(Role.CLEARER);
        
        ResponseEntity<AuthenticationResponse> response = ResponseEntity.ok(service.register(request));
        return response;
        
    }
    
    @PostMapping("/registerClient")
    public ResponseEntity<AuthenticationResponse> registerClient(@RequestBody RegisterRequest request) {
        
        request.setRole(Role.CLIENT);
        
        ResponseEntity<AuthenticationResponse> response = ResponseEntity.ok(service.register(request));
        return response;
        
    }
    
    @PostMapping("/registerAdmin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(@RequestBody RegisterRequest request) {
        
        request.setRole(Role.ADMIN);
        
        ResponseEntity<AuthenticationResponse> response = ResponseEntity.ok(service.register(request));
        return response;
        
    }
    
    // AUTHENTICATE
    //@PostMapping("/authenticate")
    //public ResponseEntity<AuthenticationResponse> register2(@RequestBody RegisterRequest request) {
    //    return ResponseEntity.ok(service.authenticate(request));
    //}
    
}
