
package com.rentamaid.security.restfulwebservices.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author oscarcortes
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    // TOKEN SENT BACK TO CUSTOMER OR USER
    private String token;
    
    private String message;
    
    private boolean Successful;
}
