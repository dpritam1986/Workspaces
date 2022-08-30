package com.springbootrestapi.MicroService.CirizenService.Service;

import java.util.List;

import com.springbootrestapi.MicroService.CirizenService.Entity.Citizen;

public interface CitizenService {
	
	
	public List<Citizen> getByVaccinationCenterId(Integer id);

	public Citizen save(Citizen citizen);
	
	public Citizen getByCitizenId(Integer id);
	
	
}
