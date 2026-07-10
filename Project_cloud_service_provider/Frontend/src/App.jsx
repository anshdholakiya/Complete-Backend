import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreatePage from './pages/CreatePage'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePage />} />
        <Route path="/feed" element={<Feed/>} /> 
      </Routes>
    </Router> 
  )
}

export default App;