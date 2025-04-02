package com.itvedant.scanmark.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddFacultyRequest {

    private String facultyCode;
    private String name;
    private String email;
    private String department;
}
