package com.example.Employee.Management.jwtutil;

import java.util.Date;

import org.springframework.stereotype.Component;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class Jwtutil {
	
	private String secret = "myscrecretkey";

	public String generate(String userName) {
		return Jwts.builder()
				.setSubject(userName)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
				.signWith(SignatureAlgorithm.HS256, secret)
				.compact();
				
		
				
				
		
		
	
	}

}
