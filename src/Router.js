import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Features from './components/Features/Features'
import Screen from './components/Screens/Screen'


function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Screen />} />
            {/* <Route path='/' element={<Features />} /> */}
        </Routes>
    </div>
  )
}

export default Router