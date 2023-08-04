/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.Data;


/**
 *
 * @author Monse
 */

@Entity
@Data
@Table(name = "postulaciones")
public class Postulacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date ultMod;
    private int edad;
    private String descripcion;
    private String location;
    
    @PrePersist
    public void prepersist(){
    ultMod = new Date();
    }

    @ManyToOne
    @JoinColumn(name = "vacante_id")
    private Vacante vacante;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User usuario;

    public Postulacion() {
    }

    public Postulacion(Date date, int edad, String descripcion, String location, Vacante vacante, User usuario) {
       
        this.edad = edad;
        this.descripcion = descripcion;
        this.location = location;
        this.vacante = vacante;
        this.usuario = usuario;
    }
   
}

   
