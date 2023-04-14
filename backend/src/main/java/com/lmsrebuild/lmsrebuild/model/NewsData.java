package com.lmsrebuild.lmsrebuild.model;


import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class NewsData {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String newstitle;
	private String hashtags;
	private String content;
	LocalDate today = LocalDate.now();
	
	
	public NewsData() {
		
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNewstitle() {
		return newstitle;
	}


	public void setNewstitle(String newstitle) {
		this.newstitle = newstitle;
	}


	public String getHashtags() {
		return hashtags;
	}


	public void setHashtags(String hashtags) {
		this.hashtags = hashtags;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public LocalDate getToday() {
		return today;
	}


	public void setToday(LocalDate today) {
		this.today = today;
	}
	  
	
	


	
	

	

	
}
