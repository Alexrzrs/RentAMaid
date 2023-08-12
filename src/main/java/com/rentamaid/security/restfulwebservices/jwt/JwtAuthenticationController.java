package com.rentamaid.security.restfulwebservices.jwt;

import com.rentamaid.security.restfulwebservices.entity.Role;
import com.rentamaid.security.restfulwebservices.entity.User;
import com.rentamaid.security.restfulwebservices.repository.UserRepository;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwtAuthenticationController {
    
    private final JwtTokenService tokenService;
    
    private final AuthenticationManager authenticationManager;
    
    private final UserRepository repo;

    public JwtAuthenticationController(JwtTokenService tokenService, AuthenticationManager authenticationManager, com.rentamaid.security.restfulwebservices.repository.UserRepository repo) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
        this.repo = repo;
    }
    
    @PostMapping("/authenticate/client")
    public ResponseEntity<JwtTokenResponse> authenticateClient(@RequestBody JwtTokenRequest jwtTokenRequest) {
        return authenticateAndGenerateToken(jwtTokenRequest, "ROLE_CLIENT");
    }
    
    @PostMapping("/authenticate/clearer")
    public ResponseEntity<JwtTokenResponse> authenticateClearer(@RequestBody JwtTokenRequest jwtTokenRequest) {
        return authenticateAndGenerateToken(jwtTokenRequest, "ROLE_CLEARER");
    }
    
    @PostMapping("/authenticate/admin")
    public ResponseEntity<JwtTokenResponse> authenticateAdmin(@RequestBody JwtTokenRequest jwtTokenRequest) {
        return authenticateAndGenerateToken(jwtTokenRequest, "ROLE_ADMIN");
    }

    private ResponseEntity<JwtTokenResponse> authenticateAndGenerateToken(JwtTokenRequest jwtTokenRequest, String requiredRole) {
        
        var authenticationToken = 
                new UsernamePasswordAuthenticationToken(
                        jwtTokenRequest.username(), 
                        jwtTokenRequest.password());
        
        try {
            
            var authentication = 
                    authenticationManager.authenticate(authenticationToken);

            var userDetails = (UserDetails) authentication.getPrincipal();

            boolean hasRequiredRole = userDetails.getAuthorities().stream().anyMatch(role -> role.getAuthority().equals(requiredRole));
            
            if (!hasRequiredRole) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new JwtTokenResponse(null, null, "Usuario no registrado! " + userDetails.getAuthorities(), null));
            }
            Optional<User> userId = repo.findByEmail(userDetails.getUsername());
            String id = userId.get().getId().toString();
                 
            var token = tokenService.generateToken(authentication);

            return ResponseEntity.ok(new JwtTokenResponse(token, userDetails, "Autenticación correcta", id));
        }catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new JwtTokenResponse(null, null, "Credenciales incorrectas", null));
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new JwtTokenResponse(null, null, ex.toString(), null));
        }
    }
    
    /*
    @PostMapping("/authenticate")
    public ResponseEntity<JwtTokenResponse> generateToken(
            @RequestBody JwtTokenRequest jwtTokenRequest) {
        
        var authenticationToken = 
                new UsernamePasswordAuthenticationToken(
                        jwtTokenRequest.username(), 
                        jwtTokenRequest.password());
        
        var authentication = 
                authenticationManager.authenticate(authenticationToken);
        
        var userDetails = (UserDetails) authentication.getPrincipal();
        
        var token = tokenService.generateToken(authentication);
        
        return ResponseEntity.ok(new JwtTokenResponse(token, userDetails));
    }
*/
}


