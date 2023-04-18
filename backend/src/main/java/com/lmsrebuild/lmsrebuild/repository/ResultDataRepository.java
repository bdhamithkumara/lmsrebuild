package com.lmsrebuild.lmsrebuild.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lmsrebuild.lmsrebuild.model.ResultData;
@Repository
public interface ResultDataRepository extends JpaRepository<ResultData, Integer> {
	
	
	
}
