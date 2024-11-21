package com.example.notebook.notebook.service.NoteServiceImpl;

import com.example.notebook.notebook.service.NoteService;
import com.example.notebook.notebook.Dao.NoteDao;
import com.example.notebook.notebook.Model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;


@Service
public class NoteServiceImpl implements NoteService {

    private static final Logger logger = LoggerFactory.getLogger(NoteServiceImpl.class);

    private final NoteDao noteDao;

    public NoteServiceImpl(NoteDao noteDao) {
        this.noteDao = noteDao;
    }

    @Override
    public Note save(Note note){
        if(note.getTitle() == null || note.getTitle().isEmpty()){
            //try catch 可以接住
            logger.error("Title is empty");
            throw new IllegalArgumentException("Note title is empty");
        }
        logger.info("Saving note: {}",note);
        return noteDao.save(note);
    }

    @Override
    public List<Note> findAll(){
        logger.info("Finding all notes");
        return noteDao.findAll();
    }

    @Override
    public Optional<Note> findById(Long id){
        logger.info("Finding note by id: {}",id);
        return noteDao.findById(id);
    }

    @Override
    public Optional<Note> findByTitle(String title){
        logger.info("Finding note by title: {}",title);
        return noteDao.findByTitle(title);
    }

    @Override
    public List<Note> findByTitleContaining(String title){
        logger.info("Finding note by Contain title: {}",title);
        return noteDao.findByTitleContaining(title);
    }


    @Override
    public void deleteById(Long id,Long userId){
        Optional<Note> note = noteDao.findById(id);
        if(note.isEmpty()){
            logger.error("Note not found can not delete");
            throw new IllegalArgumentException("Note not found");
        }
        if(!note.get().getUserid().equals(userId)){
            logger.error("User ID {} does not have permission to delete note with ID {}", userId, id);
            throw new IllegalArgumentException("Userid not allowed to delete note");
        }
        logger.info("Deleting note with id: {}", id);
        noteDao.deleteById(id);
    }

    @Override
    public void deleteByTitle(String title){
        if(title == null || title.isEmpty()){
            logger.error("Title is empty can not delete");
            throw new IllegalArgumentException("Title is empty");
        }
        logger.info("Deleting note with title: {}", title);
        noteDao.deleteByTitle(title);
    }
}
