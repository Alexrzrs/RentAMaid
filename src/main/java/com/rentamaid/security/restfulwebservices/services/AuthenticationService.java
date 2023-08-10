/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.services;

import com.rentamaid.security.restfulwebservices.entity.AuthenticationRequest;
import com.rentamaid.security.restfulwebservices.entity.AuthenticationResponse;
import com.rentamaid.security.restfulwebservices.entity.RegisterRequest;
import com.rentamaid.security.restfulwebservices.entity.User;
import com.rentamaid.security.restfulwebservices.exception.UserAlreadyExistsException;
import com.rentamaid.security.restfulwebservices.jwt.JwtTokenService;
import com.rentamaid.security.restfulwebservices.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author oscarcortes
 */
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    
    private final UserDetailsService userDetailsService;
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenService jwtService;
    private final AuthenticationManager authenticationManager;
    
    public AuthenticationResponse register(RegisterRequest request) {
        
        AuthenticationResponse response = new AuthenticationResponse();
        
        try {
            // Check if the user with the given email already exists
        if (repository.existsByEmail(request.getEmail())) {
            response.setMessage("Usuario existente!");
            response.setSuccessful(true);
            return response;
            //return "User with this email already exists";
        }
        
        // CREATES USER SAVES IT TO DB AND RETURNS GENERATED TOKEN
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .role(request.getRole())
                .build();
        
        repository.save(user);
        
        // Create Authentication object
        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getEmail());
        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

        var jwtTkn = jwtService.generateToken(authentication);
        
        // Agrega un mensaje de registro para verificar el token generado
        System.out.println("Generated JWT token: " + jwtTkn);
        
        response.setMessage("Usuario registrado existosamente!");
        response.setSuccessful(true);
        response.setToken(jwtTkn);
        
        return response;
        
        //return AuthenticationResponse.builder().token(jwtTkn).build();
        } catch (BadCredentialsException ex) {
            response.setMessage("Credenciales invalidas");
            response.setSuccessful(false);
            
            return response;
        } catch (Exception ex) {
            response.setMessage("Error al autenticar");
            response.setSuccessful(false);
            
            return response;
        }
        
        
    }
    
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        
        // Agrega un mensaje de registro para verificar que el método authenticate se ejecute
        System.out.println("Executing AuthenticationService.authenticate()");
        
        //Validate user is authenticated
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                request.getEmail(),
//                request.getPassword()
//                )
//        );

        // Validate user credentials and authenticate
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        // Generate token and send back
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        
        //var user = repository.findByEmail(request.getEmail()).orElseThrow(null);
        var jwtTkn = jwtService.generateToken(authentication);
        
        // Agrega un mensaje de registro para verificar el token generado
        System.out.println("Generated JWT token: " + jwtTkn);
        
        return AuthenticationResponse.builder().token(jwtTkn).build();
    }
}
