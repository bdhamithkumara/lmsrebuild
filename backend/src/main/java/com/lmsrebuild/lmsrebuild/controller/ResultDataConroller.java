package com.lmsrebuild.lmsrebuild.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.lmsrebuild.lmsrebuild.model.ResultData;
import com.lmsrebuild.lmsrebuild.service.ResultDataService;

@RestController
@RequestMapping("/result")
@CrossOrigin
public class ResultDataConroller {
	
	@Autowired
	private ResultDataService resultDataService;
	
	@PostMapping("/add")
	public String add(@RequestBody ResultData resultData ) {
		resultDataService.saveResult(resultData);
		return "result Data added";
	}
	
	@GetMapping("/getAll")
	public List<ResultData> getAll(){
		return resultDataService.getallResult();
	}
}
