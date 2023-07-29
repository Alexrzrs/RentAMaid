/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/RestController.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.AuthenticationResponse;
import com.rentamaid.security.restfulwebservices.entity.RegisterRequest;
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
    
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        // Agrega un mensaje de registro para verificar que la solicitud llegue al controlador
        System.out.println("Received POST request to /api/v1/auth/register");
        
        ResponseEntity<AuthenticationResponse> response = ResponseEntity.ok(service.register(request));

        // Agrega un mensaje de registro para verificar que la respuesta se envíe correctamente
        System.out.println("Sending response from /api/v1/auth/register: " + response);

        return response;
        
        //return ResponseEntity.ok(service.register(request));
    }
    
    // AUTHENTICATE
    //@PostMapping("/authenticate")
    //public ResponseEntity<AuthenticationResponse> register2(@RequestBody RegisterRequest request) {
    //    return ResponseEntity.ok(service.authenticate(request));
    //}
    
}
