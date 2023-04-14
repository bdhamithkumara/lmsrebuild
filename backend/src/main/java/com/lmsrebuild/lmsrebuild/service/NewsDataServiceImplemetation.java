package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lmsrebuild.lmsrebuild.model.NewsData;
import com.lmsrebuild.lmsrebuild.repository.NewsDataRepository;
@Service
public class NewsDataServiceImplemetation implements NewsDataService  {
	
	@Autowired
	private NewsDataRepository newsDataRepository; 

	@Override
	public NewsData saveNewsData(NewsData newsdata) {
		// TODO Auto-generated method stub
		return newsDataRepository.save(newsdata);
	}

	@Override
	public List<NewsData> getAllnews() {
		// TODO Auto-generated method stub
		return newsDataRepository.findAll();
	}
	
	

}
