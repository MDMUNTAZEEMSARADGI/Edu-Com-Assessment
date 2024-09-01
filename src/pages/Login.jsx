import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [stuname, setStuname] = useState('');
    const [stuPassword, setStuPassword] = useState('');

    const [teacherError, setTeacherError] = useState(''); // Separate error state for teacher login
    const [studentError, setStudentError] = useState(''); // Separate error state for student login

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Simulate authentication with hardcoded values
        if (username === 'teacher' && password === 'admin@123') {
            // Store user data in localStorage/sessionStorage
            localStorage.setItem('user', JSON.stringify({ username }));
            // Redirect to the dashboard or Teacher page
            navigate('/teacher');
        } else {
            setTeacherError('Invalid username or password');
        }
    };

    const handleLoginStudent = async (e) => {
        e.preventDefault();
        // Simulate authentication with hardcoded values
        if (stuname === 'student' && stuPassword === 'user@123') {
            // Store user data in localStorage/sessionStorage
            localStorage.setItem('user', JSON.stringify({ stuname }));
            // Redirect to the dashboard or student page
            navigate('/student');
        } else {
            setStudentError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-teacher">
                <h2>Teacher Login</h2>
                {teacherError && <p className="error">{teacherError}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="login-student">
                <h2>Student Login</h2>
                {studentError && <p className="error">{studentError}</p>}
                <form onSubmit={handleLoginStudent}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={stuname}
                        onChange={(e) => setStuname(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={stuPassword}
                        onChange={(e) => setStuPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
