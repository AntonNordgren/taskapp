import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TaskPage from './pages/taskPage'
import UserPage from './pages/UserPage'

import Navigation from './components/navigation'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="container-fluid d-flex flex-column m-0 p-0 vh-100">

      <BrowserRouter>
        <Navigation />

        <div className="content-container vh-100">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>

        </div>

        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
