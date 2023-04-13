package com.lmsrebuild.lmsrebuild.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lmsrebuild.lmsrebuild.model.Logindata;
import com.lmsrebuild.lmsrebuild.service.LoginDataService;

@RestController
@RequestMapping("/logindata")
@CrossOrigin
public class LogindatController {
	
	@Autowired
	private LoginDataService loginDataService;
	
	@PostMapping("/add")
	public String add(@RequestBody Logindata logindata) {
		loginDataService.SaveLogindata(logindata);
		return "new record added";
	}
	
	@GetMapping("/getAll")
	public List<Logindata> getAllLogindata(){
		return loginDataService.getAllLogindata();
	}
	
}
