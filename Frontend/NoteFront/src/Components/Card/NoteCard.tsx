import React from "react";
import { Note } from "../../Types";



interface NoteCardProps {
    note: Note;
}

//React.FC 可以檢查接收的屬性是否正確
const NoteCard: React.FC<NoteCardProps> = ({ note }) =>{
    return(
        <div className="note-card">
            <button className="icon">{note.pinned?"📌" : "📄"}</button>
            <div className="content">
                <h3 className="title">{note.title}</h3>
                <p className="last-modified">變更於{new Date(note.lastModified).toLocaleDateString()}</p>
            </div>
            <button className="more-btn">•••</button>
        </div>
    );
};

export default NoteCard;













