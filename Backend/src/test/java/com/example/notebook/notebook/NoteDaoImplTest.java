package com.example.notebook.notebook;


import com.example.notebook.notebook.Dao.NoteDao;
import com.example.notebook.notebook.Model.Note;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(properties = {"spring.profiles.active=test"})
//@Transactional
public class NoteDaoImplTest {

    @Autowired
    private NoteDao noteDao;

    @Test
    void test(){

        Note note1 = new Note();
        note1.setId(1L);
        note1.setUserid(123L);
        note1.setUsername("test2");
        note1.setTitle("Test Title2");
        note1.setContent("This is test 測試2");
        noteDao.save(note1);

        Note note2 = new Note();
        note2.setId(2L);
        note2.setUserid(456L);
        note2.setUsername("test1");
        note2.setTitle("Test Title1");
        note2.setContent("This is test 測試1");
        noteDao.save(note2);



        Optional<Note> foundNote = noteDao.findByTitle("Test Title1");
        if (foundNote.isPresent()) {
            System.out.println("Found Note: " + foundNote.get());
        } else {
            System.out.println("No Note found with title: Test Title1");
        }
        assertTrue(foundNote.isPresent());
        assertEquals("test1", foundNote.get().getUsername());
        assertEquals("Test Title1", foundNote.get().getTitle());


        Optional<Note> notFoundNote = noteDao.findByTitle("Note");
        if (notFoundNote.isPresent()) {
            System.out.println("Found Note: " + notFoundNote.get());
        } else {
            System.out.println("No Note found with title: Note");
        }
        assertFalse(notFoundNote.isPresent());
    }
}
