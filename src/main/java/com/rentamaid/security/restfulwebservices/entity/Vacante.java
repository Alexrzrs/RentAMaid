package com.rentamaid.security.restfulwebservices.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.sql.Date;

/**
 *
 * @author Monse
 */

@Entity
@Table(name = "vacantes")
public class Vacante {

    @Id
    @GeneratedValue
    private Integer id;
    private Date date;
    private String descripcion;
    @Column(name = "num_habitaciones")
    private int numHabitaciones;
    @Column(name = "num_banios")
    private int numBanios;
    private String extras;
    private int total;
    //DATO PARA estadoENUM(...)
     @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User usuario;
     
    private int seleccionado;

    
    public Vacante() {
    }

    // Constructor con campos
    public Vacante(String descripcion, int numHabitaciones, int numBanios, String extras) {
        this.descripcion = descripcion;
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.extras = extras;
    }

    // Getters y Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate(){
        return date;
    }
    
    public void setDate(Date date){
        this.date = date;
    }
    
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getNumHabitaciones() {
        return numHabitaciones;
    }

    public void setNumHabitaciones(int numHabitaciones) {
        this.numHabitaciones = numHabitaciones;
    }

    public int getNumBanios() {
        return numBanios;
    }

    public void setNumBanios(int numBanios) {
        this.numBanios = numBanios;
    }

    public String getExtras() {
        return extras;
    }

    public void setExtras(String extras) {
        this.extras = extras;
    }

    public int getTotal(){
        return total;
    }
    public void setTotal(int total){
        this.total = total;
    }
    
    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }
    
    public int getSeleccionado(){
        return seleccionado;
    }
    public void setSeleccionado(int usuarios_id_seleccionado){
        this.seleccionado = seleccionado;
    }
    
}
