package com.springbootrestapi.MicroService.VaccinationService.service;

import com.springbootrestapi.MicroService.VaccinationService.Entity.VaccinationCenter;
import com.springbootrestapi.MicroService.VaccinationService.Model.CustomResponse;

public interface VaccinationCenterService {
	
	public CustomResponse getCustomRespnseFromMicroserviceCall(Integer id);
	
	public VaccinationCenter save(VaccinationCenter vaccinationCenter);

	
	
}
