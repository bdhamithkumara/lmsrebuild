 package com.lmsrebuild.lmsrebuild.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lmsrebuild.lmsrebuild.model.NewsData;

@Repository
public interface NewsDataRepository extends JpaRepository<NewsData, Integer> {

}
