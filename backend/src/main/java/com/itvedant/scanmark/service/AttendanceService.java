package com.itvedant.scanmark.service;

import java.time.LocalDate;
import java.util.List;

import com.itvedant.scanmark.dto.AttendanceRequest;
import com.itvedant.scanmark.entities.Attendance;

public interface AttendanceService {

    List<Attendance> getAllAttendance();

    Attendance getAttendanceById(Long id);

    Attendance updateAttendance(Long id, Attendance attendance);

    void deleteAttendance(Long id);

    List<Attendance> getAttendanceByStudent(Long studentId);

    List<Attendance> getAttendanceByLecture(Long lectureId);

    List<Attendance> getAttendanceByDate(LocalDate date);

    void markAttendance(AttendanceRequest request);

    List<Attendance> getAttendanceByPrn(Long prn);

    List<Attendance> getAttendanceByStudentName(String name);

    List<Attendance> getTodaysAttendance();

    List<Attendance> getCurrentMonthAttendance();

}
