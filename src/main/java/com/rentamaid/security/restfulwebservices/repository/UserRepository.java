/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.rentamaid.security.restfulwebservices.repository;

import com.rentamaid.security.restfulwebservices.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author oscarcortes
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
}
