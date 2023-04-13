package com.lmsrebuild.lmsrebuild.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.lmsrebuild.lmsrebuild.model.Logindata;

@Repository
public interface LogindataRepository extends JpaRepository<Logindata , Integer> {

}
