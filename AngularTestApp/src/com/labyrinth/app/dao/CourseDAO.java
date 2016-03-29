package com.labyrinth.app.dao;

import java.util.List;

import com.labyrinth.app.model.Course;

public interface CourseDAO {
	public List<Course> list();
	public Course get(Integer courseID);
	public void saveOrUpdate(Course course);
	public void delete(Integer courseID);

}
