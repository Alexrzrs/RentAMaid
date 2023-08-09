/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.Data;

/**
 *
 * @author Jose
 */
@Data
@Entity
@Table(name = "calificaciones")
public class Calificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String comentario;
    private int puntuacion;
    private Date fecha;
    
    @ManyToOne
    @JoinColumn(name = "calificado_id")
    private User calificado;
    
    @ManyToOne
    @JoinColumn(name = "calificador_id")
    private User calificador;
    
    @ManyToOne
    @JoinColumn(name = "vacante_id")
    private Vacante vacante;
}
