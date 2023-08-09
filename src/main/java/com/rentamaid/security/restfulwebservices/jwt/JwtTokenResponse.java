package com.rentamaid.security.restfulwebservices.jwt;

import org.springframework.security.core.userdetails.UserDetails;

public record JwtTokenResponse(String token, UserDetails userDetails, String message) {}


