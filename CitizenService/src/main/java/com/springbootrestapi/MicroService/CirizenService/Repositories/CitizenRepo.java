package com.springbootrestapi.MicroService.CirizenService.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootrestapi.MicroService.CirizenService.Entity.Citizen;

public interface CitizenRepo extends JpaRepository<Citizen, Integer> {

	public List<Citizen> findAllByVaccinationCenterId(Integer id);
}
