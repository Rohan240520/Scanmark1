package com.itvedant.scanmark.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Faculty {

    @Id
    @Column(nullable = false, unique = true)
    private String facultyCode;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String department;

    @Column(nullable = false)
    private Boolean isVerified;

    //for otp based authentication
    @Column(nullable = true)
    private String otp;

    @Column(nullable = true)
    private LocalDateTime otpExpiration;

    public Faculty(String facultyCode, String name, String email, String department) {
        this.facultyCode = facultyCode;
        this.name = name;
        this.email = email;
        this.department = department;
        isVerified = false;
    }

    public Faculty() {
        isVerified = false;
    }

    public Boolean getIsVerified() {
        return isVerified;
    }

    public void setIsVerified(Boolean value) {
        this.isVerified = value;
    }

}
