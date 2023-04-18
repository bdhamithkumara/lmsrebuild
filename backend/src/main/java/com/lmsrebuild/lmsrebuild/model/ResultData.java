package com.lmsrebuild.lmsrebuild.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ResultData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private String studentIndexNumber;
	private String acedemicYear;
	private String level;
	private String semester;
	private String subjectCode;
	private String result;
	
	public ResultData() {
		
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getStudentIndexNumber() {
		return studentIndexNumber;
	}

	public void setStudentIndexNumber(String studentIndexNumber) {
		this.studentIndexNumber = studentIndexNumber;
	}

	public String getAcedemicYear() {
		return acedemicYear;
	}

	public void setAcedemicYear(String acedemicYear) {
		this.acedemicYear = acedemicYear;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getSemester() {
		return semester;
	}

	public void setSemester(String semester) {
		this.semester = semester;
	}

	public String getSubjectCode() {
		return subjectCode;
	}

	public void setSubjectCode(String subjectCode) {
		this.subjectCode = subjectCode;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
	
	
	

}
