package org.ats.features.department.repository.custom.impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.*;
import org.ats.features.entities.User;
import org.ats.features.department.dto.DepartmentResponse;
import org.ats.features.department.repository.custom.DepartmentRepositoryCustom;
import org.ats.features.entities.Department;

import java.util.List;

public class DepartmentRepositoryCustomImpl implements DepartmentRepositoryCustom {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<DepartmentResponse> amountUserByDepartment2() {
        CriteriaBuilder criteraBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<DepartmentResponse> criteriaQuery = criteraBuilder.createQuery(DepartmentResponse.class);
        Root<Department> departmentRoot = criteriaQuery.from(Department.class);

        Join<Department, User> userJoin = departmentRoot.join("users", JoinType.LEFT);
        System.out.println(departmentRoot.getClass());
        System.out.println(userJoin.getClass());

        criteriaQuery.multiselect(
                departmentRoot.get("departmentName"),
                criteraBuilder.count(userJoin.get("id"))
        );

        criteriaQuery.groupBy(departmentRoot.get("departmentName"));
        return entityManager.createQuery(criteriaQuery).getResultList();
    }
}
