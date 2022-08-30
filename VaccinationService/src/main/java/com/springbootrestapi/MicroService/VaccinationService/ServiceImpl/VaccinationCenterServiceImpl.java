package com.springbootrestapi.MicroService.VaccinationService.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.springbootrestapi.MicroService.VaccinationService.Entity.VaccinationCenter;
import com.springbootrestapi.MicroService.VaccinationService.Model.Citizen;
import com.springbootrestapi.MicroService.VaccinationService.Model.CustomResponse;
import com.springbootrestapi.MicroService.VaccinationService.Repository.VaccinationCenterRepo;
import com.springbootrestapi.MicroService.VaccinationService.service.VaccinationCenterService;

@Service
public class VaccinationCenterServiceImpl implements VaccinationCenterService{

	
	VaccinationCenterRepo vaccinationCenterRepo;
	

	@Autowired
	private RestTemplate restTemplate;
	
	public VaccinationCenterServiceImpl(VaccinationCenterRepo vaccinationCenterRepo) {
		super();
		this.vaccinationCenterRepo = vaccinationCenterRepo;
	}

	@Override
	public VaccinationCenter save(VaccinationCenter vaccinationCenter) {
		return vaccinationCenterRepo.save(vaccinationCenter);
	}

	@Override
	public CustomResponse getCustomRespnseFromMicroserviceCall(Integer id) {
		Optional<VaccinationCenter> center = vaccinationCenterRepo.findById(id);
		VaccinationCenter obj = null;
		if(null!=center) {
			obj = center.get();
		}
		
		
		CustomResponse res = new CustomResponse();
		res.setCenter(obj);
		
		List<Citizen> citizenObj = restTemplate.getForObject("http://CITIZEN-SERVICE/citizen/vaccnid/"+id, List.class);
		
		res.setCitizens(citizenObj);
		
		return res;
	}

	
	
	
	
	
}
