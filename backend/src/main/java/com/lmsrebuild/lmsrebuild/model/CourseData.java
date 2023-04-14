package com.lmsrebuild.lmsrebuild.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CourseData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String academicYear;
	private String subjectCode;
	private String subjectName;
	private String LectureId;
	private String LectureName;
	
	
	public CourseData() {
		
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getAcademicYear() {
		return academicYear;
	}


	public void setAcademicYear(String academicYear) {
		this.academicYear = academicYear;
	}


	public String getSubjectCode() {
		return subjectCode;
	}


	public void setSubjectCode(String subjectCode) {
		this.subjectCode = subjectCode;
	}


	public String getSubjectName() {
		return subjectName;
	}


	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}


	public String getLectureId() {
		return LectureId;
	}


	public void setLectureId(String lectureId) {
		LectureId = lectureId;
	}


	public String getLectureName() {
		return LectureName;
	}


	public void setLectureName(String lectureName) {
		LectureName = lectureName;
	}
	
	
	
	
	
}
