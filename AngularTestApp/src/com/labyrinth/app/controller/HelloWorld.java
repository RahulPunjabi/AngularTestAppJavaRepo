package com.labyrinth.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorld {

	@RequestMapping("/welcome")
	public void helloWorld() {
 
		System.out.println("hello");
	}
	
}
