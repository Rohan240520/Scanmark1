package com.itvedant.scanmark.service;

import java.util.List;

import com.itvedant.scanmark.dto.AddFacultyRequest;
import com.itvedant.scanmark.dto.JwtResponse;
import com.itvedant.scanmark.dto.LocationRequest;
import com.itvedant.scanmark.dto.LoginRequest;
import com.itvedant.scanmark.dto.OtpVerificationRequest;
import com.itvedant.scanmark.dto.QRResponse;
import com.itvedant.scanmark.entities.Faculty;

public interface FacultyService {

    List<Faculty> getAllFaculties();

    Faculty getFacultyByFacultyCode(String code);

    Faculty createFaculty(Faculty faculty);

    Faculty updateFaculty(String code, Faculty faculty);

    void deleteFaculty(String code);

    Faculty getFacultyByEmail(String email);

    Faculty addFaculty(AddFacultyRequest request);

    List<Faculty> getAllFaculty();

    QRResponse generateQRForSession(LocationRequest locationRequest, String token, Long lectureId);

    public QRResponse getQRForLecture(Long lectureId);

    JwtResponse signIn(LoginRequest loginRequest);

    void sendOtp(Faculty faculty);

    String verifyOtp(OtpVerificationRequest request);
}
