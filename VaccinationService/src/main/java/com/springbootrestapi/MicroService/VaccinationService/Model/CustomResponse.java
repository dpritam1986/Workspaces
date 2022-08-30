package com.springbootrestapi.MicroService.VaccinationService.Model;

import java.util.List;

import com.springbootrestapi.MicroService.VaccinationService.Entity.VaccinationCenter;

public class CustomResponse {

	
	private VaccinationCenter center;
	private List<Citizen> citizens;
	public VaccinationCenter getCenter() {
		return center;
	}
	public void setCenter(VaccinationCenter center) {
		this.center = center;
	}
	public List<Citizen> getCitizens() {
		return citizens;
	}
	public void setCitizens(List<Citizen> citizens) {
		this.citizens = citizens;
	}
	
	
	
}
