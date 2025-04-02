package com.itvedant.scanmark.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddStudentRequest {

    private Long prn;
    private String name;
    private String email;
}
