package org.ats.features.dashboard.service.impl;

import lombok.RequiredArgsConstructor;
import org.ats.features.dashboard.dto.DashboardSearchRequest;
import org.ats.features.dashboard.dto.DashboardSearchResponse;
import org.ats.features.dashboard.service.DashboardService;
import org.ats.features.department.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {
    private final DepartmentRepository dashboardRepository;


    @Override
    public List<DashboardSearchResponse> search(DashboardSearchRequest request) {
        return dashboardRepository.search(request);
    }
}
