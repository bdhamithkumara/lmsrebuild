package com.lmsrebuild.lmsrebuild.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lmsrebuild.lmsrebuild.model.ResultData;
import com.lmsrebuild.lmsrebuild.repository.ResultDataRepository;

@Service
public class ResultDataImplemetation implements ResultDataService {
	
	@Autowired
	private ResultDataRepository resultDataRepository;

	@Override
	public ResultData saveResult(ResultData resultData) {
		// TODO Auto-generated method stub
		return resultDataRepository.save(resultData);
	}

	@Override
	public List<ResultData> getallResult() {
		// TODO Auto-generated method stub
		return resultDataRepository.findAll();
	}
	
	

}
