package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import com.lmsrebuild.lmsrebuild.model.NewsData;

public interface NewsDataService {
	
	public NewsData saveNewsData(NewsData newsdata);
	
	public List<NewsData> getAllnews();

}
