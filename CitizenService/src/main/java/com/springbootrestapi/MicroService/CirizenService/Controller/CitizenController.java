package com.springbootrestapi.MicroService.CirizenService.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootrestapi.MicroService.CirizenService.Entity.Citizen;
import com.springbootrestapi.MicroService.CirizenService.Service.CitizenService;

@RestController
@RequestMapping("/citizen")
public class CitizenController {
	
	//instead you can autowire object
	
	private CitizenService citizenService;
	
	public CitizenController(CitizenService citizenService) {
		super();
		this.citizenService = citizenService;
	}
	
	@RequestMapping(path="/test")
	public ResponseEntity<String> test() {
		return new ResponseEntity<String>("Hello Citizen service responding" , HttpStatus.OK);
	}

	@RequestMapping(path="/vaccnid/{id}")
	public ResponseEntity<java.util.List<Citizen>> getByVaccinationCenterId(@PathVariable Integer id){
		return new ResponseEntity<java.util.List<Citizen>>(citizenService.getByVaccinationCenterId(id), HttpStatus.OK);
	}
	
	@RequestMapping(path="/citizid/{id}")
	public ResponseEntity<Citizen> getByCitizenId(@PathVariable Integer id){
		return new ResponseEntity<Citizen>(citizenService.getByCitizenId(id), HttpStatus.OK);
	}
	
	@PostMapping(path="/add")
	public ResponseEntity<Citizen> addCitizen(@RequestBody Citizen citizen){
		return new ResponseEntity<Citizen>(citizenService.save(citizen), HttpStatus.OK);
	}
}
