package org.ats.features.dashboard.repository;

import org.ats.features.dashboard.repository.custom.DashboardRepositoryCustom;
import org.ats.features.entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DashboardRepository extends JpaRepository<Department, Long>, DashboardRepositoryCustom {
}
