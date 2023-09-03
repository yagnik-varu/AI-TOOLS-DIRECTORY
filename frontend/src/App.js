import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Tools from './pages/Tools'
import ImageTools from './components/ImageTools'
import VideoTools from './components/VideoTools'
import ChatbotTools from './components/ChatbotTools'
import Favourite from './pages/Favourite'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
    
        <Navbar></Navbar>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='tools'>
                    <Route path='' element={<ImageTools />} />
                    <Route path='image' element={<ImageTools/>} />
                    <Route path='video' element={<VideoTools />} />
                    <Route path='chatbot' element={<ChatbotTools />} />
                </Route>

                <Route path="favourite" element={Favourite}></Route>

                <Route path='login' element={<Login/>}></Route>

            </Routes>
        </Router>
        </>
    )
}

export default App