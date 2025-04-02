package com.itvedant.scanmark.service;

import java.util.List;

import com.itvedant.scanmark.entities.Lecture;

public interface LectureService {

    Lecture createLecture(Lecture lecture);

    Lecture updateLecture(Long id, Lecture lecture);

    Lecture getLectureById(Long id);

    List<Lecture> getAllLectures();

    void deleteLecture(Long id);
}
