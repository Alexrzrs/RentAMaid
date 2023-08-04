/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.repository;

import com.rentamaid.security.restfulwebservices.entity.Postulacion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Monse
 */
public interface PostulacionRepository extends JpaRepository<Postulacion, Integer> {
      List<Postulacion> findByDescripcionContainingIgnoreCase(String descripcion);
    
}
