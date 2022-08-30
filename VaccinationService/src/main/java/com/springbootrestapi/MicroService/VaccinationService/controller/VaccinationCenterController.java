package com.springbootrestapi.MicroService.VaccinationService.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootrestapi.MicroService.VaccinationService.Entity.VaccinationCenter;
import com.springbootrestapi.MicroService.VaccinationService.Model.CustomResponse;
import com.springbootrestapi.MicroService.VaccinationService.Repository.VaccinationCenterRepo;
import com.springbootrestapi.MicroService.VaccinationService.service.VaccinationCenterService;

@RestController
@RequestMapping("/vaccinationcenter")
public class VaccinationCenterController {
	
	
	VaccinationCenterService vaccinationCenterService;
	
	public VaccinationCenterController(VaccinationCenterService vaccinationCenterService) {
		super();
		this.vaccinationCenterService = vaccinationCenterService;
		
	}
	
	@PostMapping(path="/add")
	public ResponseEntity<VaccinationCenter> addCitizen(@RequestBody VaccinationCenter vaccenter){
		return new ResponseEntity<VaccinationCenter>(vaccinationCenterService.save(vaccenter), HttpStatus.OK);
	}
	
	@GetMapping(path="/getall/{id}")
	public ResponseEntity<CustomResponse> getAllById(@PathVariable Integer id){
		
		return  new ResponseEntity<CustomResponse>(vaccinationCenterService.getCustomRespnseFromMicroserviceCall(id) , HttpStatus.OK );
	}

}
