package org.ats.features.department.controller;

import org.ats.features.entities.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController // Spring Bean --> Container
@RequestMapping("/api/v1/departments")
@CrossOrigin(origins = "http://localhost:3000")
public class DepartmentController {

    @GetMapping
    public ResponseEntity<Page<Department>> getDepartment(){
        List<Department> departments = new ArrayList<>();
        departments.add(Department.builder().id(1L).departmentName("SE").description("Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.").build());
        departments.add(Department.builder().id(2L).departmentName("IT").description("Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.").build());

        Page<Department> page = new PageImpl<>(departments);

        return ResponseEntity.ok(page);
    }

}
