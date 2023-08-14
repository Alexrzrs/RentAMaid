/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.User;
import com.rentamaid.security.restfulwebservices.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dulcemarialopezsalinas
 */
@RestController
public class UserController {
    private final UserRepository userRepository;
private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


  @GetMapping("/api/v1/users")
public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = userRepository.findAll();
    return ResponseEntity.ok(users);
}

@GetMapping("/api/v1/user/{email}")
     public ResponseEntity<User> getUser(@PathVariable String email) {
         Optional<User> optionalUser = userRepository.findByEmail(email);
         
         if (optionalUser.isEmpty()) {
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
         }
         
         User user = optionalUser.get();
         
         return ResponseEntity.ok(user);
     }

@PatchMapping("/api/v1/users/edit/{id}")
    public ResponseEntity<User> editUser(@PathVariable Integer id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        User user = optionalUser.get();

        // Verificar si algún campo está presente en los datos actualizados
        if (updatedUser.getFirstname() != null) {
            user.setFirstname(updatedUser.getFirstname());
        }
        if (updatedUser.getLastname() != null) {
            user.setLastname(updatedUser.getLastname());
        }
        if (updatedUser.getEmail() != null) {
            user.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getPassword() != null) {
            // Encriptar la contraseña actualizada antes de guardarla
            String encryptedPassword = passwordEncoder.encode(updatedUser.getPassword());
            user.setPassword(encryptedPassword);
        }
        if (updatedUser.getPhone() != null ) {
            user.setPhone(updatedUser.getPhone());
        }

        userRepository.save(user); // Guardar los cambios en la base de datos

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    
    @GetMapping("/api/v1/users/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
    Optional<User> optionalUser = userRepository.findById(id);

    if (optionalUser.isEmpty()) {
        return new ResponseEntity<>("Usuario no encontrado", HttpStatus.NOT_FOUND);
    }

    User user = optionalUser.get();
    userRepository.delete(user);

    return new ResponseEntity<>("Usuario eliminado correctamente", HttpStatus.OK);
}
}