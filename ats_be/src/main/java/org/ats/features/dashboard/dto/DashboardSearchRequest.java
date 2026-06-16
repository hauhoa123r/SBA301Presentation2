package org.ats.features.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DashboardSearchRequest {
    private String email;
    private String phone;
    private String userName;
    private String jobName;
    private String departmentName;
}