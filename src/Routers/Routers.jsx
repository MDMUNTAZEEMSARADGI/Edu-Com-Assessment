import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Teacher from '../components/Teacher';
import Student from '../components/Student';
import Exam from '../pages/Student pages/Exam';
import Settings from '../pages/Settings';
import AddExam from '../pages/Teacher pages/AddExam';
import Results from '../pages/Results';
import Message from '../pages/Message';
import Records from '../pages/Teacher pages/Records';

const Routers = () => {
    const isAuthenticated = !!localStorage.getItem('user');

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teacher" element={isAuthenticated ? <Teacher /> : <Navigate to="/login" />} />
                <Route path="/student" element={isAuthenticated ? <Student /> : <Navigate to="/login" />} />
                <Route path="/exam" element={<Exam />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/addexam" element={<AddExam />} />
                <Route path="/results" element={<Results />} />
                <Route path="/message" element={<Message />} />
                <Route path="/records" element={<Records />} />
            </Routes>

        </>
    );
};

export default Routers;
