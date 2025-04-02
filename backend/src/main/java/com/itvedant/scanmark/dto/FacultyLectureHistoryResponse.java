package com.itvedant.scanmark.dto;

import java.util.List;

import com.itvedant.scanmark.entities.Faculty;
import com.itvedant.scanmark.entities.Lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacultyLectureHistoryResponse {

    private Faculty faculty;
    private List<Lecture> lectures;
}
