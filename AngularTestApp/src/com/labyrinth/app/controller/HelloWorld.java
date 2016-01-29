package com.labyrinth.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorld {

	@RequestMapping("/welcome")
	public void helloWorld() {
 
		String message = "<br><div style='text-align:center;'>"
				+ "<h3>********** Hello World</h3>This message is coming from HelloWorld.java **********</div><br><br>";
		System.out.println("hello");
	}
	
}
