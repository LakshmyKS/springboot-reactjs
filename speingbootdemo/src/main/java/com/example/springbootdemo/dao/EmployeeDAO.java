package com.example.springbootdemo.dao;

import java.util.List;

import com.example.springbootdemo.modal.Employee;

public interface EmployeeDAO {
	 
	 List<Employee> get();
	 
	 Employee get(int id);
	 
	 void save(Employee employee);

	}