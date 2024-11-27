import './App.css'
import { Note } from "./Types";
import { useState } from 'react';
import NoteCard from "./Components/Card/NoteCard.tsx";

const mockNotes: Note[] = [
    {
        userid: 1,
        username:"Wilber",
        title: "筆記標題 1",
        content: "這是第一個筆記的內容。",
    },
    {
        userid: 2,
        username:"MMM",
        title: "筆記標題2",
        content: "222222222。",
    },
];

function App() {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        <div className="App">
            <div className={`sideMenu ${isSideMenuOpen ? '' : 'collapsed'}`}>
                <button
                    className="sideMenu-button"
                    onClick={() => setSideMenuOpen(!isSideMenuOpen)}
                >
                    <i className="sideMenu-button-icon">
                        {isSideMenuOpen ? '<||' : '||>'}
                    </i>
                </button>
                <form>
                    <input type="search" placeholder="請輸入搜尋名稱"/>
                </form>
                <button className="set-note">+建立筆記</button>
                <nav>
                    <ul>
                        <li>
                            <i className="fas fa-sitemap"></i>
                            <span>我的筆記</span>
                        </li>
                        <li>
                            <i className="fas fa-chalkboard"></i>
                            <span>協作筆記</span>
                        </li>
                        <li>
                            <i className="fas fa-trash"></i>
                            <span>我的垃圾桶</span>
                        </li>
                        <li>
                            <i className="fas fa-tag"></i>
                            <span>標籤</span>
                        </li>
                        <li>
                            <i className="fas fa-heart"></i>
                            <span>喜愛</span>
                        </li>
                        <li>
                            <i className="fas fa-clock"></i>
                            <span>最近瀏覽</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="NoteTitle">
            <h1>我的筆記test</h1>
            </div>
            <div className="note-container">
                {mockNotes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
}

export default App;
