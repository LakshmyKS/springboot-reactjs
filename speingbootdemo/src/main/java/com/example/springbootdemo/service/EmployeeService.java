package com.example.springbootdemo.service;

import java.util.List;

import com.example.springbootdemo.modal.Employee;

public interface EmployeeService {
List<Employee> get();
 
 Employee get(int id);
 
 void save(Employee employee);
 
}