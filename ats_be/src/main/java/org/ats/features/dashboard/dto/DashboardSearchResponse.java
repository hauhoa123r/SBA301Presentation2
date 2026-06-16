package org.ats.features.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DashboardSearchResponse {
    private Long userId;
    private String userName;
    private String email;
    private String phone;
    private String departmentName;
    private Long jobId;
    private String jobName;
    private String jobStatus;
}