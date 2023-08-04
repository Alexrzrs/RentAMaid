/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.Postulacion;
import com.rentamaid.security.restfulwebservices.repository.PostulacionRepository;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Monse
 */

@RequestMapping("/api/v1/auth")
@RestController
public class PostulacionController {
    @Autowired
    private  PostulacionRepository postulacionRepository;

    @GetMapping("/postulacion")
    public ResponseEntity<List<Postulacion>> mostrarPostulantes() {
        List<Postulacion> listaPostulacion = postulacionRepository.findAll();
        return ResponseEntity.ok(listaPostulacion);
    }
    
   @GetMapping("/postulacion/{id}")
   public ResponseEntity<Postulacion> buscarPostulacionPorId(@PathVariable Integer id) {
    try {
        Optional<Postulacion> postulacionOptional = postulacionRepository.findById(id);
        
        if (postulacionOptional.isPresent()) {
            Postulacion postulacionEncontrada = postulacionOptional.get();
            return ResponseEntity.ok(postulacionEncontrada);
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
}

    
  @PostMapping("/nueva-postulacion")
    public ResponseEntity<Postulacion> crearPostulacion(@RequestBody Postulacion nuevaPostulacion) {
    nuevaPostulacion.setUltMod(new Date()); 
    
    try {
        Postulacion postulacionGuardada = postulacionRepository.save(nuevaPostulacion);
        return ResponseEntity.status(HttpStatus.CREATED).body(postulacionGuardada);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
}

    
}
