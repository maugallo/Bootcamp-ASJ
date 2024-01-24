package com.bootcamp.todolist;

import java.util.ArrayList;
import java.util.List;

import org.springframework.validation.BindingResult;

public class ErrorHandler {

	public static List<String> showErrorMessage(BindingResult bindingResult){
		List<String> errorList = new ArrayList<String>();
		
		bindingResult.getFieldErrors().forEach((error) -> {
			errorList.add("[" + error.getField() + "] = [" + error.getDefaultMessage() + "]");
		});
		
		return errorList;
	}
	
}
