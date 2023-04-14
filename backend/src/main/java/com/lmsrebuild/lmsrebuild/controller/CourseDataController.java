package com.lmsrebuild.lmsrebuild.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lmsrebuild.lmsrebuild.model.CourseData;
import com.lmsrebuild.lmsrebuild.service.CourseDataService;

@RestController
@RequestMapping("/course")
@CrossOrigin
public class CourseDataController {
	
	@Autowired
	private CourseDataService courseDataService;
	
	@PostMapping("/add")
	public String add(@RequestBody CourseData courseData) {
		courseDataService.saveCourseData(courseData);
		return "data added";
	}
	
	@GetMapping("/getall")
	public List<CourseData> getalldata(){
		return courseDataService.getAllCourse();
	}
	
}	


