package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lmsrebuild.lmsrebuild.model.CourseData;

@Service
public interface CourseDataService {
	
	
	public CourseData saveCourseData(CourseData courseData);
	
	public List<CourseData> getAllCourse();
	
}
