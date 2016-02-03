package com.labyrinth.app.model;

import java.util.Date;

public class Student {

	private Integer StudentID; 
	private String FirstMidName;
	private String LastName;
	private Date EnrollmentDate;

	
	public Student(Integer studentID, String firstMidName, String lastName, Date enrollmentDate) {
		this.StudentID = studentID;
		this.FirstMidName = firstMidName;
		this.LastName = lastName;
		this.EnrollmentDate = enrollmentDate;
	}

	public Integer getStudentID() {
		return StudentID;
	}

	public void setStudentID(Integer studentID) {
		StudentID = studentID;
	}

	public String getFirstMidName() {
		return FirstMidName;
	}

	public void setFirstMidName(String firstMidName) {
		FirstMidName = firstMidName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public Date getEnrollmentDate() {
		return EnrollmentDate;
	}

	public void setEnrollmentDate(Date enrollmentDate) {
		EnrollmentDate = enrollmentDate;
	}
	
}
