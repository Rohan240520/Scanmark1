package com.itvedant.scanmark.service;

public interface MailSenderService {

    void sendOtp(String toEmail, String otp);
}
