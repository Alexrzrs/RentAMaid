/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.repository;

import com.rentamaid.security.restfulwebservices.entity.Vacante;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Monse
 */
public interface VacanteRepository extends JpaRepository<Vacante, Integer> {
    
      List<Vacante> findByDescripcionContainingIgnoreCase(String descripcion);
    
}
