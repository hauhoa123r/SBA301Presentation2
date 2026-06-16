package org.ats.features.dashboard.repository.custom;

import org.ats.features.dashboard.dto.DashboardSearchRequest;
import org.ats.features.dashboard.dto.DashboardSearchResponse;

import java.util.List;

public interface DashboardRepositoryCustom {
    List<DashboardSearchResponse> search(
            DashboardSearchRequest request);
}
