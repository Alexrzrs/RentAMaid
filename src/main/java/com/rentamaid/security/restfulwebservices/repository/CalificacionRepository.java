/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.repository;

import com.rentamaid.security.restfulwebservices.entity.Calificacion;
import com.rentamaid.security.restfulwebservices.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jose
 */
public interface CalificacionRepository extends JpaRepository<Calificacion, Integer> {
    List<Calificacion> findByCalificado(User user);
    
    List<Calificacion> findByCalificador(User user);
    
}
