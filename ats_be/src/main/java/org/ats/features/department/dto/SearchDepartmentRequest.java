package org.ats.features.department.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SearchDepartmentRequest {
    private String departmentName;
    private String userName;
    private String jobName;
}
