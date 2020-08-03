package com.jarvis.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoRestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoRestApiApplication.class, args);
		System.out.println("Spring Boot Application Started...");

	}

}
