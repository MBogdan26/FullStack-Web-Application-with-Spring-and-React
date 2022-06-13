package com.example.proiectMatei.proiectPIU.repository;

import com.example.proiectMatei.proiectPIU.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
