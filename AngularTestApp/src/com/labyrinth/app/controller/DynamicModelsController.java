package com.labyrinth.app.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DynamicModelsController {

	
	//commit check
	@RequestMapping(value="/api/DynamicModels", method=RequestMethod.GET)
	public List<String> getDynamicModels()
	{
		System.out.println(getClass().getResource("./").getPath());
		File current=new File(getClass().getResource("./").getPath()+"/");
		System.out.println(current.getName());
		File someFiles[]=current.listFiles();
		/*List<File> contollerList=(List<File>)Arrays.asList(current.listFiles());
		for(File file : contollerList)
		{
			System.out.println(file.getName());
		}*/
		List<String> dynamicModelList=new ArrayList<>();
		dynamicModelList.add("Students");
		
		return dynamicModelList;
	}
	
	
}
