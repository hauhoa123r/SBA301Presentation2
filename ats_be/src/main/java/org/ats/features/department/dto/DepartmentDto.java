package org.ats.features.department.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDto {
    private Long id;

    @NotBlank
    @Pattern(regexp = "^[A-Za-z]+$", message = "Department name is not valid: must be character only.")
    private String departmentName;

    private String description;
}
