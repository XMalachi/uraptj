import React from 'react'
import { Routes, Route } from 'react-router-dom'

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