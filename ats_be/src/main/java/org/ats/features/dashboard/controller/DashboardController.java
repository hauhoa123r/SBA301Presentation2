package org.ats.features.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.ats.features.dashboard.dto.DashboardSearchRequest;
import org.ats.features.dashboard.dto.DashboardSearchResponse;
import org.ats.features.dashboard.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class DashboardController {
    private final DashboardService dashboardService;
    @GetMapping("/search")
    public ResponseEntity<List<DashboardSearchResponse>> search(@ModelAttribute DashboardSearchRequest request) {
        return ResponseEntity.ok(dashboardService.search(request));
    }
}
