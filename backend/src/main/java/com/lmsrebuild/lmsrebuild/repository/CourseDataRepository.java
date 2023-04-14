package com.lmsrebuild.lmsrebuild.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lmsrebuild.lmsrebuild.model.CourseData;
@Repository
public interface CourseDataRepository extends JpaRepository<CourseData, Integer> {

}
