package com.lmsrebuild.lmsrebuild.service;

import java.util.List;

import com.lmsrebuild.lmsrebuild.model.Logindata;

public interface LoginDataService {
	
	public Logindata SaveLogindata(Logindata logindata);
	
	public List<Logindata> getAllLogindata();

}
