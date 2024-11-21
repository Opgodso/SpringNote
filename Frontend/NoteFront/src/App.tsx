import './App.css'
import { Note } from "./Types";
import NoteCard from "./Components/Card/NoteCard.tsx";

const mockNotes: Note[] = [
    {
        id: 1,
        title: "筆記標題 1",
        content: "這是第一個筆記的內容。",
        pinned: true,
        lastModified: "2024-11-20T08:00:00Z",
        tags: ["example", "typescript"],
    },
    {
        id: 2,
        title: "筆記標題 2",
        content: "這是第二個筆記的內容。",
        pinned: false,
        lastModified: "2024-11-19T10:00:00Z",
        tags: ["typescript"],
    },
];

function App() {
  return (
      <div className="App">
          <div className="NoteTitle">
              <h1>我的筆記</h1>
          </div>
          <div className='navibar'>
              <button className='menu-btn'>☰</button>
          </div>
          <div className='note-container'>
              {mockNotes.map((note) => (
                  <NoteCard key={note.id} note = {note} />
              ))}
          </div>
      </div>


  );
}

export default App
