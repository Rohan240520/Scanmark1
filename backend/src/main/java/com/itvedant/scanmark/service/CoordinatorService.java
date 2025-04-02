package com.itvedant.scanmark.service;

import java.util.List;

import com.itvedant.scanmark.dto.FacultyLectureHistoryResponse;
import com.itvedant.scanmark.dto.JwtResponse;
import com.itvedant.scanmark.dto.LoginRequest;
import com.itvedant.scanmark.dto.OtpVerificationRequest;
import com.itvedant.scanmark.dto.ScheduleLectureRequest;
import com.itvedant.scanmark.dto.SignUpRequest;
import com.itvedant.scanmark.dto.SignUpResponse;
import com.itvedant.scanmark.dto.StudentHistoryResponse;
import com.itvedant.scanmark.dto.UpdateFacultyRequest;
import com.itvedant.scanmark.dto.UpdateStudentRequest;
import com.itvedant.scanmark.entities.Coordinator;
import com.itvedant.scanmark.entities.Faculty;
import com.itvedant.scanmark.entities.Lecture;
import com.itvedant.scanmark.entities.Student;

public interface CoordinatorService {

    // Get all coordinators
    List<Coordinator> getAllCoordinators();

    // Get coordinator by id
    Coordinator getCoordinatorById(Long id);

    // Create a new coordinator
    Coordinator createCoordinator(Coordinator coordinator);

    // Update coordinator details
    Coordinator updateCoordinator(Long id, Coordinator coordinator);

    // Delete coordinator
    void deleteCoordinator(Long id);

    SignUpResponse signup(SignUpRequest signUpRequest);

    String verifyOtp(OtpVerificationRequest request);

    JwtResponse signIn(LoginRequest loginRequest);

    Coordinator getCoordinatorByEmail(String email);

    StudentHistoryResponse getStudentHistoryByPrn(Long prn);

    FacultyLectureHistoryResponse getFacultyHistory(String facultyCode);

    Student updateStudent(Long prn, UpdateStudentRequest request);

    void deleteStudent(Long prn);

    Faculty updateFaculty(String facultyCode, UpdateFacultyRequest request);

    void deleteFaculty(String facultyCode);

    Lecture scheduleLecture(ScheduleLectureRequest scheduleLectureRequest);
}
