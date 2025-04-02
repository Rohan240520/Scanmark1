package com.itvedant.scanmark.dto;

import java.util.List;

import com.itvedant.scanmark.entities.Attendance;
import com.itvedant.scanmark.entities.Student;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentHistoryResponse {

    private Student student;
    private List<Attendance> attendanceList;
}
