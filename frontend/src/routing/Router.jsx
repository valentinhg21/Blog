import React from 'react'

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../components/page/Home'
import { Articles } from '../components/page/Articles'

export const Router = () => {
    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/articles" element={<Articles />}/>
            </Routes>
        </BrowserRouter>
    )
}