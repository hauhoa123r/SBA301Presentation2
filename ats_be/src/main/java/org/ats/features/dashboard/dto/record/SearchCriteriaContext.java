package org.ats.features.dashboard.dto.record;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.ats.features.dashboard.dto.DashboardSearchRequest;
import org.ats.features.entities.Department;
import org.ats.features.entities.Job;
import org.ats.features.entities.User;

import java.util.List;

public record SearchCriteriaContext(
        DashboardSearchRequest dashboardSearchRequest,
        CriteriaBuilder criteriaBuilder,
        Root<User> userRoot,
        Join<User, Department> departmentJoin,
        Join<User, Job> jobJoin,
        List<Predicate> predicates
) {}