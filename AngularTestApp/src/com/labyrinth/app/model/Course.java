package com.labyrinth.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course {
	
	@Id
	@GeneratedValue
	@Column(name="course_ID")
	private Integer CourseID; 
	
	@Column(name="course_name")
	private String CourseName;
	
	@Column(name="course_dept")
	private String CourseDept;

	
	public Integer getCourseID() {
		return CourseID;
	}


	public void setCourseID(Integer courseID) {
		CourseID = courseID;
	}


	public String getCourseName() {
		return CourseName;
	}


	public void setCourseName(String courseName) {
		CourseName = courseName;
	}


	public String getCourseDept() {
		return CourseDept;
	}


	public void setCourseDept(String courseDept) {
		CourseDept = courseDept;
	}


	//jackson
	public Course()
	{
		
	}
	
	public Course(Integer courseID,String courseName,String courseDept)
	{
		this.CourseID=courseID;
		this.CourseName=courseName;
		this.CourseDept=courseDept;
	}
	
	
}
