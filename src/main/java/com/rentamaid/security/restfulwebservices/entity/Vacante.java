package com.rentamaid.security.restfulwebservices.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.sql.Date;
import lombok.Data;



/**
 *
 * @author Monse
 */
@Data
@Entity
@Table(name = "vacantes")
public class Vacante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date date;
    private String descripcion;
    @Column(name = "num_habitaciones")
    private int numHabitaciones;
    @Column(name = "num_banios")
    private int numBanios;
    private String extras;
    private float total;
    //DATO PARA estadoENUM(...)
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private User cliente;

    @ManyToOne
    @JoinColumn(name = "trabajador_id")
    private User trabajador;

    public Vacante() {
    }

    // Constructor con campos
    public Vacante(String descripcion, int numHabitaciones, int numBanios, float total, String extras, Date date, User cliente) {
        this.descripcion = descripcion;
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.extras = extras;
        this.total = total;
        this.date = date;
        this.cliente = cliente;
    }
}
