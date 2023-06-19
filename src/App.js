
import './index.css';
import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Unimed from './pages/Unimed';
import UnimedCad from './pages/Cadastros/UnimedCad';




function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full bg-gray-200">
            <Router>
                <Routes>
                    <Route exact path="/faturamento" element={<Home/>} /> 
                    <Route exact path="/faturamento/unimed" element={<Unimed/>} />
                    <Route exact path="/faturamento/unimed/cadastro" element={<UnimedCad/>} />
                </Routes>
            </Router>
        </div>

);
}

export default App;