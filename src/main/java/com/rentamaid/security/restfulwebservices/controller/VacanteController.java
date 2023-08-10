
package com.rentamaid.security.restfulwebservices.controller;

import com.rentamaid.security.restfulwebservices.entity.User;
import com.rentamaid.security.restfulwebservices.entity.Vacante;
import com.rentamaid.security.restfulwebservices.repository.UserRepository;
import com.rentamaid.security.restfulwebservices.repository.VacanteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author Monse
 */

@RestController
public class VacanteController {

    @Autowired
    private VacanteRepository vacanteRepository;
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/api/v1/auth/vacantes")
    public ResponseEntity<List<Vacante>> mostrarVacantes() {
        List<Vacante> listaVacantes = vacanteRepository.findAll();
        
        return ResponseEntity.ok(listaVacantes);
    }
    

    @GetMapping("/api/v1/vacantes/user/{usuarioId}")
    public ResponseEntity<List<Vacante>> getVacantesByUsuarioId(@PathVariable Integer usuarioId) {
        List<Vacante> vacantes = vacanteRepository.findByClienteId(usuarioId);

        if (vacantes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(vacantes);
    }

    @PostMapping("/api/v1/auth/nueva-vacante")
    public ResponseEntity<Vacante> agregarVacante(@RequestBody Vacante vacante) {
        try {
            System.out.println(vacante.getCliente());
            Vacante nuevaVacante = vacanteRepository.save(vacante);
            return ResponseEntity.ok(nuevaVacante);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    @PutMapping("/api/v1/auth/editar-vacante/{id}")
    public ResponseEntity<Vacante> editarVacante(@PathVariable Integer id, @RequestBody Vacante vacante) {
    Optional<Vacante> optionalVacante = vacanteRepository.findById(id);

    if (optionalVacante.isPresent()) {
        Vacante vacanteExistente = optionalVacante.get();
        vacanteExistente.setDate(vacante.getDate());
        vacanteExistente.setDescripcion(vacante.getDescripcion());
        vacanteExistente.setNumHabitaciones(vacante.getNumHabitaciones());
        vacanteExistente.setNumBanios(vacante.getNumBanios());
        vacanteExistente.setExtras(vacante.getExtras());
        vacanteExistente.setCliente(vacante.getCliente());
        vacanteExistente.setTrabajador(vacante.getTrabajador());

        Vacante vacanteActualizada = vacanteRepository.save(vacanteExistente);
        return ResponseEntity.ok(vacanteActualizada);
    } else {
        return ResponseEntity.notFound().build();
    }
}

}
