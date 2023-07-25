package egovframework.com.utl.wed.web;

import java.lang.reflect.Field;

public class Self_util {
	
		public void self_view_object(Object bindingResult) throws IllegalArgumentException, IllegalAccessException {
		System.out.println("=========++++==============");
		
		Object fieldObj = bindingResult;
		for (Field field : fieldObj.getClass().getDeclaredFields()) {
		  field.setAccessible(true);
		  Object value = field.get(fieldObj);
		  System.out.println("field : "+field.getName()+" | value : " + value);
		}
		
	
		System.out.println("=========++++==============");
	}
}