package com.jarvis.todo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.jarvis.todo.model.HelloWorldBean;

@RestController
@CrossOrigin
public class HelloWorldController {
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping("/hello-bean")
	public HelloWorldBean helloWorldBean() {
		throw new RuntimeException("Something is Wrong!!!");
	}
	
	
	@GetMapping("/hello/{name}")
	public HelloWorldBean helloWorldName(@PathVariable String name) {
		return new HelloWorldBean("Hello, " +name);
	}
}
