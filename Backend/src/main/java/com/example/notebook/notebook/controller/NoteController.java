package com.example.notebook.notebook.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.notebook.notebook.Model.Note;
import com.example.notebook.notebook.service.NoteService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService){
        this.noteService = noteService;
    }


    @PostMapping
    public Note createNote(@RequestBody Note note){
        return noteService.save(note);
    }

    @GetMapping
    public List<Note> getAllBook(){
        return noteService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Note> getNoteById(@PathVariable Long id){
        return noteService.findById(id);
    }

    @GetMapping("/search/title")
    public Optional<Note> findByTitle(@RequestParam String title){
        return noteService.findByTitle(title);
    }

    @GetMapping("/search")
    public List<Note> findByTitleContaining(@RequestParam String title){
        return noteService.findByTitleContaining(title);
    }

    @DeleteMapping
    public void deleteNoteById(@RequestParam Long id, @RequestParam Long userId){
        noteService.deleteById(id , userId);
    }

    @DeleteMapping
    public void deleteNoteByTitle(@RequestParam String title){
        noteService.deleteByTitle(title);
    }
}
