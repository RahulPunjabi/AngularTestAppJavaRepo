package com.labyrinth.app.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.labyrinth.app.model.Student;

@RestController
public class StudentsController {

	@RequestMapping(value="/api/Students", method=RequestMethod.GET)
	public List<Student> getAllStudents()
	{
		List<Student> studentList=new ArrayList<>();
		studentList.add(new Student(1, "Rahul", "Punjabi", new Date()));
		//test git hook
		studentList.add(new Student(2, "FName", "LName", new Date()));
		
		return studentList;
	}
}
