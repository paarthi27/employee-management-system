package com.example.Employee.Management.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Global CORS configuration.
 * Allows the frontend (served from Netlify) to call the backend API.
 * Adjust the allowedOrigins value to match your Netlify domain, or set it to "*" for testing.
 */
@Configuration
public class WebConfig {

    // Change this to your Netlify site URL (e.g., https://my-site.netlify.app)
    private static final String[] ALLOWED_ORIGINS = {"*"}; // use * for development

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Apply CORS to all endpoints under /api/**
                registry.addMapping("/api/**")
                        .allowedOrigins(ALLOWED_ORIGINS)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
