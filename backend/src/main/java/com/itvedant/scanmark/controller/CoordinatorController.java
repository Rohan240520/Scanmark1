package com.itvedant.scanmark.controller;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itvedant.scanmark.config.JWTProvider;
import com.itvedant.scanmark.dto.AddFacultyRequest;
import com.itvedant.scanmark.dto.AddStudentRequest;
import com.itvedant.scanmark.dto.CoordinatorProfileResponse;
import com.itvedant.scanmark.dto.FacultyLectureHistoryResponse;
import com.itvedant.scanmark.dto.ForgotPasswordRequest;
import com.itvedant.scanmark.dto.ForgotPasswordResponse;
import com.itvedant.scanmark.dto.JwtResponse;
import com.itvedant.scanmark.dto.LoginRequest;
import com.itvedant.scanmark.dto.LoginResponse;
import com.itvedant.scanmark.dto.OtpVerificationRequest;
import com.itvedant.scanmark.dto.ResetPasswordRequest;
import com.itvedant.scanmark.dto.ScheduleLectureRequest;
import com.itvedant.scanmark.dto.SignUpRequest;
import com.itvedant.scanmark.dto.SignUpResponse;
import com.itvedant.scanmark.dto.StudentHistoryResponse;
import com.itvedant.scanmark.dto.UpdateFacultyRequest;
import com.itvedant.scanmark.dto.UpdateStudentRequest;
import com.itvedant.scanmark.entities.Attendance;
import com.itvedant.scanmark.entities.Coordinator;
import com.itvedant.scanmark.entities.Faculty;
import com.itvedant.scanmark.entities.Lecture;
import com.itvedant.scanmark.entities.Student;
import com.itvedant.scanmark.exceptions.ResourceNotFoundException;
import com.itvedant.scanmark.service.AttendanceService;
import com.itvedant.scanmark.service.CoordinatorService;
import com.itvedant.scanmark.service.FacultyService;
import com.itvedant.scanmark.service.ForgotPasswordService;
import com.itvedant.scanmark.service.StudentService;

@RestController
@RequestMapping("/api/coordinators")
public class CoordinatorController {

    private final CoordinatorService coordinatorService;
    private final JWTProvider jwtProvider;
    private final ForgotPasswordService forgotPasswordService;
    private final AttendanceService attendanceService;
    private final StudentService studentService;
    private final FacultyService facultyService;

    public CoordinatorController(CoordinatorService coordinatorService, JWTProvider jwtProvider,
            ForgotPasswordService forgotPasswordService, AttendanceService attendanceService,
            StudentService studentService, FacultyService facultyService) {
        this.coordinatorService = coordinatorService;
        this.jwtProvider = jwtProvider;
        this.forgotPasswordService = forgotPasswordService;
        this.attendanceService = attendanceService;
        this.studentService = studentService;
        this.facultyService = facultyService;
    }

    @PostMapping("/signin")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        loginRequest.setRole("coordinator");
        JwtResponse jwtResponse = coordinatorService.signIn(loginRequest);
        return ResponseEntity.ok(new LoginResponse(jwtResponse.getToken(), jwtResponse.getMessage()));
    }

    @PostMapping("/signup")
    public ResponseEntity<SignUpResponse> signup(@RequestBody SignUpRequest signUpRequest) {
        return ResponseEntity.ok(coordinatorService.signup(signUpRequest));
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody OtpVerificationRequest request) {
        return ResponseEntity.ok(coordinatorService.verifyOtp(request));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<ForgotPasswordResponse> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        String responseMessage = forgotPasswordService.forgotPassword(forgotPasswordRequest.getEmail());
        return ResponseEntity.ok(new ForgotPasswordResponse(responseMessage, !responseMessage.contains("failed")));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest) {
        String response = forgotPasswordService.resetPassword(resetPasswordRequest.getEmail(), resetPasswordRequest.getOtp(),
                resetPasswordRequest.getNewPassword(), "ROLE_COORDINATOR");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/profile")
    public ResponseEntity<CoordinatorProfileResponse> getUserProfile(@RequestHeader("Authorization") String token) {
        String emailFromToken = jwtProvider.getUsernameFromToken(token.substring(7));
        Coordinator coordinator = coordinatorService.getCoordinatorByEmail(emailFromToken);
        return ResponseEntity.ok(new CoordinatorProfileResponse(coordinator.getName(), coordinator.getEmail()));
    }

    @GetMapping("/search-student/{prn}")
    public ResponseEntity<StudentHistoryResponse> searchStudent(@PathVariable Long prn) {
        return ResponseEntity.ok(coordinatorService.getStudentHistoryByPrn(prn));
    }

    @GetMapping("/search-attendance-by-date/{date}")
    public ResponseEntity<List<Attendance>> getAttendanceByDate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        List<Attendance> attendanceList = attendanceService.getAttendanceByDate(date);
        if (attendanceList.isEmpty()) {
            throw new ResourceNotFoundException("No attendance records found for: " + date);
        }
        return ResponseEntity.ok(attendanceList);
    }

    @GetMapping("/faculty-history/{facultyCode}")
    public ResponseEntity<FacultyLectureHistoryResponse> getFacultyHistory(@PathVariable String facultyCode) {
        return ResponseEntity.ok(coordinatorService.getFacultyHistory(facultyCode));
    }

    @PostMapping("/add-student")
    public ResponseEntity<Student> addStudent(@RequestBody AddStudentRequest addStudentRequest) {
        return ResponseEntity.ok(studentService.addStudent(addStudentRequest));
    }

    @PostMapping("/add-faculty")
    public ResponseEntity<Faculty> addFaculty(@RequestBody AddFacultyRequest addFacultyRequest) {
        return ResponseEntity.ok(facultyService.addFaculty(addFacultyRequest));
    }

    @PutMapping("/update-student/{prn}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long prn, @RequestBody UpdateStudentRequest request) {
        return ResponseEntity.ok(coordinatorService.updateStudent(prn, request));
    }

    @DeleteMapping("/delete-student/{prn}")
    public ResponseEntity<Map<String, String>> deleteStudent(@PathVariable Long prn) {
        coordinatorService.deleteStudent(prn);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Student deleted successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update-faculty/{facultyCode}")
    public ResponseEntity<Faculty> updateFaculty(@PathVariable String facultyCode, @RequestBody UpdateFacultyRequest request) {
        return ResponseEntity.ok(coordinatorService.updateFaculty(facultyCode, request));
    }

    @DeleteMapping("/delete-faculty/{facultyCode}")
    public ResponseEntity<Map<String, String>> deleteFaculty(@PathVariable String facultyCode) {
        coordinatorService.deleteFaculty(facultyCode);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Faculty deleted successfully");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/schedule-lecture")
    public ResponseEntity<Lecture> scheduleLecture(@RequestBody ScheduleLectureRequest scheduleLectureRequest) {
        return ResponseEntity.ok(coordinatorService.scheduleLecture(scheduleLectureRequest));
    }
}
