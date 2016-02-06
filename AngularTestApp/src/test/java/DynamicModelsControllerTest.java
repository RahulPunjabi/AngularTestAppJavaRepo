package test.java;

import org.junit.Assert;
import org.junit.Test;

import com.labyrinth.app.controller.DynamicModelsController;


public class DynamicModelsControllerTest{

	@Test
	public void getDynamicModelsTest()
	{
		DynamicModelsController dmcTest=new DynamicModelsController();
		Assert.assertNotNull(dmcTest.getDynamicModels());
	}
	
	
}