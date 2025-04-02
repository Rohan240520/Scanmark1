package com.itvedant.scanmark.entities;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Lecture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @JsonProperty("facultyName")
    private String facultyName;

    @Column(nullable = false)
    @JsonProperty("subjectName")
    private String subjectName;

    @Column(nullable = false)
    @JsonProperty("lectureTime")
    private LocalDateTime lectureTime;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "faculty_code", nullable = false)
    @JsonIgnore
    private Faculty faculty; // Foreign Key mapping to Faculty

    @OneToMany(mappedBy = "lecture", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<QRData> qrDataList; // One-to-Many with QRData

    public Lecture() {
    }

    public Lecture(Long id, String facultyName, String subjectName, LocalDateTime lectureTime, Faculty faculty) {
        this.id = id;
        this.facultyName = facultyName;
        this.subjectName = subjectName;
        this.lectureTime = lectureTime;
        this.faculty = faculty;
    }
}
