package com.itvedant.scanmark.service;

public interface ForgotPasswordService {

    public String forgotPassword(String email);

    public String resetPassword(String email, String otp, String newPassword, String role);

}
