package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lmsrebuild.lmsrebuild.model.Logindata;
import com.lmsrebuild.lmsrebuild.repository.LogindataRepository;

@Service
public class LogindataServiceImplementation implements LoginDataService {
	
	@Autowired
	private LogindataRepository logindataRepository;

	@Override
	public Logindata SaveLogindata(Logindata logindata) {

		return logindataRepository.save(logindata);
	}

	@Override
	public List<Logindata> getAllLogindata() {
		// TODO Auto-generated method stub
		return logindataRepository.findAll();
	}
	
	

}
