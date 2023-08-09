/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.Calificacion;
import com.rentamaid.security.restfulwebservices.entity.User;
import com.rentamaid.security.restfulwebservices.repository.CalificacionRepository;
import com.rentamaid.security.restfulwebservices.repository.UserRepository;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jose
 */
@RequestMapping("/api/v1/auth")
@RestController
public class CalificacionController {
    @Autowired
    private CalificacionRepository calificacionRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/calificaciones/{id}")
    public ResponseEntity<List<Calificacion>> mostrarCalifiaciones(@PathVariable Integer id) {
        try {
            Optional<User> u = userRepository.findById(id);
            
            if (u.isPresent()) {
                List<Calificacion> calificaciones = calificacionRepository.findByCalificado(u.get());       
                return ResponseEntity.ok(calificaciones);
                        
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    @GetMapping("/resenas/{id}")
    public ResponseEntity<List<Calificacion>> mostrarResenas(@PathVariable Integer id) {
        try {
            Optional<User> u = userRepository.findById(id);
            
            if (u.isPresent()) {
                List<Calificacion> calificaciones = calificacionRepository.findByCalificador(u.get());       
                return ResponseEntity.ok(calificaciones);
                        
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    @PostMapping("/calificar")
    public ResponseEntity<Calificacion> calififcar(@RequestBody Calificacion nuevaCalificacion) {
        nuevaCalificacion.setFecha(new Date());
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(calificacionRepository.save(nuevaCalificacion));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
