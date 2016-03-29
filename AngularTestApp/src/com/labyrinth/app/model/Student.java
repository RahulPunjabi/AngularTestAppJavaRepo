package com.labyrinth.app.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="student")
public class Student {

	@Id
	@GeneratedValue
	@Column(name="student_ID")
	private Integer StudentID; 
	
	@Column(name="first_name")
	private String FirstMidName;
	
	@Column(name="last_name")
	private String LastName;
	
	@Column(name="enrollment_date")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm a z")
	private Date EnrollmentDate;

	
	public Student(Integer studentID, String firstMidName, String lastName, Date enrollmentDate) {
		this.StudentID = studentID;
		this.FirstMidName = firstMidName;
		this.LastName = lastName;
		this.EnrollmentDate = enrollmentDate;
	}
	
	//jackson
	public Student()
	{
		
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
