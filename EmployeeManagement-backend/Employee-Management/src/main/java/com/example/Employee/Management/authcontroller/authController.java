package com.example.Employee.Management.authcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Employee.Management.jwtutil.Jwtutil;
import com.example.Employee.Management.login.LoginRequest;

@CrossOrigin
@RestController("/auth")
public class authController {
	
	@Autowired
	private Jwtutil jwtutil;
	
@PostMapping("/login")	
public ResponseEntity<?> login(@RequestBody LoginRequest req){
	
	if("admin"==req.getUserName()&&"password"==req.getPassword()) {
		
		String token = jwtutil.generate(req.getUserName());
		
		return ResponseEntity.ok(token);
		
	}
	
	return ResponseEntity.status(401).body("invalid");
	
	
	
	
}

}
