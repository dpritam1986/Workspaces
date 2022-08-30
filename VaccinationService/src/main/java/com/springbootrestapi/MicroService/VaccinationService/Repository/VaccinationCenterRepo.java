package com.springbootrestapi.MicroService.VaccinationService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootrestapi.MicroService.VaccinationService.Entity.VaccinationCenter;
import com.springbootrestapi.MicroService.VaccinationService.Model.CustomResponse;

public interface VaccinationCenterRepo extends JpaRepository<VaccinationCenter , Integer>{


	

}
