import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom';
import Page from "./Components/Page/Page.tsx"


const Home: React.FC = () => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/page");
    }
    return (
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
                <input type="search" placeholder="請輸入搜尋名稱" />
            </form>
            <button
                className="set-note"
                onClick={handleButtonClick}
            >
                +建立小說
            </button>
            <nav>
                <ul>
                    <li><span>我的小說</span></li>
                    <li><span>協作小說</span></li>
                    <li><span>我的垃圾桶</span></li>
                    <li><span>標籤</span></li>
                    <li><span>喜愛</span></li>
                    <li><span>最近瀏覽</span></li>
                </ul>
            </nav>
        </div>
    );
};



const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
            </Routes>
        </Router>
    );
};
export default App;
