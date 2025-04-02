package com.itvedant.scanmark.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.itvedant.scanmark.entities.Faculty;
import com.itvedant.scanmark.entities.Lecture;
import com.itvedant.scanmark.repository.FacultyRepository;
import com.itvedant.scanmark.repository.LectureRepository;
import com.itvedant.scanmark.service.LectureService;

@RestController
@RequestMapping("/api/lecture")
public class LectureController {

    private final LectureService lectureService;
    private final LectureRepository lectureRepository;
    private final FacultyRepository facultyRepository;

    public LectureController(FacultyRepository facultyRepository, LectureService lectureService,
            LectureRepository lectureRepository) {
        this.lectureService = lectureService;
        this.lectureRepository = lectureRepository;
        this.facultyRepository = facultyRepository;
    }

    @GetMapping
    public ResponseEntity<List<Lecture>> getAllLectures() {
        return ResponseEntity.ok(lectureService.getAllLectures());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lecture> getLectureById(@PathVariable Long id) {
        return ResponseEntity.ok(lectureService.getLectureById(id));
    }

    @PostMapping
    public ResponseEntity<Lecture> createLecture(@RequestBody Lecture lecture) {
        return ResponseEntity.ok(lectureService.createLecture(lecture));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lecture> updateLecture(@PathVariable Long id, @RequestBody Lecture lecture) {
        return ResponseEntity.ok(lectureService.updateLecture(id, lecture));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLecture(@PathVariable Long id) {
        lectureService.deleteLecture(id);
        return ResponseEntity.noContent().build();
    }

    //getting list of lectures by faculty name
    @GetMapping("/lectures")
    public ResponseEntity<List<Lecture>> getLecturesByFacultyName(@RequestHeader("Authorization") String token,
            @RequestParam String facultyName) {
        try {
            System.out.println("Fetching faculty with name: " + facultyName);
            Faculty faculty = facultyRepository.findByName(facultyName)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Faculty not found"));

            System.out.println("Faculty found: " + faculty);

            List<Lecture> lectures = lectureRepository.findByFaculty(faculty);

            System.out.println("Lectures fetched: " + lectures);
            if (lectures.isEmpty()) {
                System.out.println("lectures list empty");
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            }
            return ResponseEntity.ok(lectures);
        } catch (Exception e) {
            System.err.println("Error while processing the request: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Could not fetch lectures");
        }
    }

}
