package com.labyrinth.app.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DynamicModelsController {

	@RequestMapping(value="/api/DynamicModels", method=RequestMethod.GET)
	public List<String> getAllStudents()
	{
		List<String> dynamicModelList=new ArrayList<>();
		dynamicModelList.add("Students");
		
		return dynamicModelList;
	}
	
	
}