import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Movies from './components/Movies' 
import MovieRoute from './components/MovieRoute'
export default function App() {
  return (
    <div>
        <BrowserRouter>
        
        <Link to="/">Home</Link>
            <Routes>
                <Route exact path="/" element={<Movies/>}/>
                <Route path="/:id" element={<MovieRoute/>} />
            </Routes>
        
        </BrowserRouter>

    </div>
  )
}
