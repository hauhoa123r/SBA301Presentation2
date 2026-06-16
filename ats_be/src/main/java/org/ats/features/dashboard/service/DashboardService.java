package org.ats.features.dashboard.service;

import org.ats.features.dashboard.dto.DashboardSearchRequest;
import org.ats.features.dashboard.dto.DashboardSearchResponse;
import org.springframework.data.domain.Page;

import java.util.List;

public interface DashboardService {
    List<DashboardSearchResponse> search(
            DashboardSearchRequest request);
}
