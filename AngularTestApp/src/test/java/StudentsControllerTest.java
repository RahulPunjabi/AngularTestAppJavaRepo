package test.java;

import org.junit.Assert;
import org.junit.Test;

import com.labyrinth.app.controller.StudentsController;

public class StudentsControllerTest {

	@Test
	public void getAllStudentsTest()
	{
		StudentsController studentsController=new StudentsController();
		Assert.assertNotNull(studentsController.getAllStudents());
	}
	
}
