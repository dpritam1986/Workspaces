package com.springbootrestapi.MicroService.CirizenService.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.springbootrestapi.MicroService.CirizenService.Entity.Citizen;
import com.springbootrestapi.MicroService.CirizenService.Repositories.CitizenRepo;
import com.springbootrestapi.MicroService.CirizenService.Service.CitizenService;

@Service
public class CitzenServiceImpl implements CitizenService{

	CitizenRepo citizenRepo;
	
	public CitzenServiceImpl(CitizenRepo repo) {
		super();
		this.citizenRepo = repo;
	}

	@Override
	public List<Citizen> getByVaccinationCenterId(Integer id) {
		
		List<Citizen>  obj= citizenRepo.findAllByVaccinationCenterId(id);
		
		return obj;
		
		
	}
	
	@Override
	public Citizen getByCitizenId(Integer id) {
		
		Optional<Citizen>  obj= citizenRepo.findById(id);
		
		return obj.get();
		
		
	}

	@Override
	public Citizen save(Citizen citizen) {
		return citizenRepo.save(citizen);
	}
	
	
	
	
}
