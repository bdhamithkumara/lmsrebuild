package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import com.lmsrebuild.lmsrebuild.model.ResultData;


public interface ResultDataService {
	
	public ResultData saveResult(ResultData resultData);
	
	public List<ResultData> getallResult();

}
