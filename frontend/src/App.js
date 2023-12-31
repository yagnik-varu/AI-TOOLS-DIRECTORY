import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Tools from './pages/Tools'
import ImageTools from './components/ImageTools'
// import VideoTools from './components/VideoTools'
import MediaTools from './components/MediaTools';
import ChatbotTools from './components/ChatbotTools'
import CodingTools from './components/CodingTools';
import Favourite from './pages/Favourite'
import Login from './pages/Login'
import Header from './components/Header'
import CardDetail from './components/CardDetail';
import './App.css' 

function App() {

    return (
        <div className='body'>
        
    
        
        <Router>
        <Header/>
            <Routes>
                <Route path='/' element={<Home />} />

                {/* <Route path='tools'> */}
                    {/* <Route path='' element={<ImageTools />} /> */}
                <Route path='image' element={<ImageTools/>} />
                    <Route path='media' element={<MediaTools/>} />
                    <Route path='coding' element={<CodingTools/>} />
                    {/* <Route path='media' element={<VideoTools />} /> */}
                    <Route path='chatbot' element={<ChatbotTools />} />
                    {/* </Route> */}

                <Route path="favourite" element={<Favourite/>}></Route>

                <Route path='login' element={<Login/>}></Route>
                <Route path='carddetail' element={<CardDetail/>}></Route>


            </Routes>
        </Router>
        </div>
    )
}

export default App