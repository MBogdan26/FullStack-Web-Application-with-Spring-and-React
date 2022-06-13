package com.example.proiectMatei.proiectPIU.service;

import com.example.proiectMatei.proiectPIU.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
