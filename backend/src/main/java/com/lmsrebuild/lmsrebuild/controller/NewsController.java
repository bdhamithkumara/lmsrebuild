package com.lmsrebuild.lmsrebuild.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lmsrebuild.lmsrebuild.model.NewsData;
import com.lmsrebuild.lmsrebuild.service.NewsDataService;

@RestController
@RequestMapping("/news")
@CrossOrigin
public class NewsController {
	
	@Autowired
	private NewsDataService newsDataService;
	
	@PostMapping("/add")
	public String add(@RequestBody NewsData newsdata) {
		newsDataService.saveNewsData(newsdata);
		return "data added";
	}
	
	@GetMapping("/alldata")
	public List<NewsData> getAllnews(){
		return newsDataService.getAllnews();
	}
	
}
