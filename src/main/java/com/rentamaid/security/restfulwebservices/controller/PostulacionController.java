/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.Estado;
import com.rentamaid.security.restfulwebservices.entity.Postulacion;
import com.rentamaid.security.restfulwebservices.entity.Vacante;
import com.rentamaid.security.restfulwebservices.repository.PostulacionRepository;
import com.rentamaid.security.restfulwebservices.repository.VacanteRepository;
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
    private PostulacionRepository postulacionRepository;

    @Autowired
    private VacanteRepository vacanteRepository;

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
    
    @GetMapping("/postulacion/vacante/{id}")
    public ResponseEntity<List<Postulacion>> buscarPostulantesPorVacante(@PathVariable Integer id) {
        
        Optional<Vacante> vacanteOptional = vacanteRepository.findById(id);
        try {
            if (vacanteOptional.isPresent()) {
                Vacante vacante = vacanteOptional.get();

                List<Postulacion> postulantes = postulacionRepository.findByVacante(vacante);
                return ResponseEntity.ok(postulantes);

            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
    }
    

    @PostMapping("/nueva-postulacion")
    public ResponseEntity<Postulacion> crearPostulacion(@RequestBody Postulacion nuevaPostulacion) {
        nuevaPostulacion.setUltMod(new Date());

        try {
            Postulacion postulacionGuardada = postulacionRepository.save(nuevaPostulacion);
            return ResponseEntity.ok(postulacionGuardada);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @GetMapping("/aceptar-postulacion/{id}")
    public ResponseEntity<Postulacion> aceptarPostulacion(@PathVariable Integer id) {
        try {
            Optional<Postulacion> postulacionOptional = postulacionRepository.findById(id);
            if (postulacionOptional.isPresent()) {
                Postulacion postulacion = postulacionOptional.get();
                if (!postulacion.getEstado().equals(Estado.RECHAZADO)) {
                    postulacion.setEstado(Estado.ACEPTADO);
                    postulacionRepository.save(postulacion);

                     // Asigna al trabajador a la vacante y guarda los cambios
                    Vacante v = postulacion.getVacante();
                    v.setTrabajador(postulacion.getUsuario());
                    vacanteRepository.save(v);

                    // Obtiene todas las postulaciones para la misma vacante y las rechaza
                    List<Postulacion> postulaciones = postulacionRepository.findByVacante(v);
                    if (postulaciones.size() > 0) {
                        for (Postulacion p : postulaciones) {
                            if (!p.equals(postulacion)) {
                                p.setEstado(Estado.RECHAZADO);
                                postulacionRepository.save(p);
                            }
                        }
                    }
                }
                return ResponseEntity.ok(postulacion);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
