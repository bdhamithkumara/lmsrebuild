package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lmsrebuild.lmsrebuild.model.CourseData;
import com.lmsrebuild.lmsrebuild.repository.CourseDataRepository;
@Service
public class CourseDataImplemetation implements CourseDataService {

	@Autowired
	private CourseDataRepository courseDataRepository;
	
	@Override
	public CourseData saveCourseData(CourseData courseData) {
		
		return courseDataRepository.save(courseData);
	}

	@Override
	public List<CourseData> getAllCourse() {
		// TODO Auto-generated method stub
		return courseDataRepository.findAll();
	}
	
	

}
