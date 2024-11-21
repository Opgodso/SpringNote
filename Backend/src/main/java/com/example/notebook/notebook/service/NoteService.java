package com.example.notebook.notebook.service;


import com.example.notebook.notebook.Model.Note;

import java.util.List;
import java.util.Optional;


public interface NoteService {
    Note save(Note note);
    void deleteById(Long id,Long userId);
    void deleteByTitle(String title);
    List<Note> findAll();
    Optional<Note>findByTitle(String title);
    Optional<Note> findById(Long id);
    List<Note> findByTitleContaining(String title);
}
