import React, { useState } from 'react';
import './Student.css';
import { FaHome, FaClipboardList, FaChartBar, FaUserFriends, FaEnvelope, FaCog, FaQuestionCircle, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Teacher = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <div className={`sidebar ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
                {/* <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar"> */}
                <div className="sidebar-header">
                    <h2>{sidebarOpen ? 'Dashboard' : ''}</h2>
                    <button className="hamburger" onClick={toggleSidebar}>
                        {sidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/student" className="nav-link">
                        <FaHome className="nav-icon" />
                        {sidebarOpen && <span>Dashboard</span>}
                    </Link>
                    <Link to="/exam" className="nav-link">
                        <FaClipboardList className="nav-icon" />
                        {sidebarOpen && <span>Exams</span>}
                    </Link>
                    <Link to="/results" className="nav-link">
                        <FaChartBar className="nav-icon" />
                        {sidebarOpen && <span>Results</span>}
                    </Link>
                    <Link to="/message" className="nav-link">
                        <FaEnvelope className="nav-icon" />
                        {sidebarOpen && <span>Messages</span>}
                    </Link>
                    <Link to="/settings" className="nav-link">
                        <FaCog className="nav-icon" />
                        {sidebarOpen && <span>Settings</span>}
                    </Link>
                    <a href="#" className="nav-link">
                        <FaQuestionCircle className="nav-icon" />
                        {sidebarOpen && <span>Help</span>}
                    </a>
                    <a href="#" className="nav-link logout">
                        <FaSignOutAlt className="nav-icon" />
                        {sidebarOpen && <span onClick={handleLogout}>Log out</span>}
                    </a>
                </nav>
            </div>

            <div className="content">
                <header className="dashboard-header">
                    <h1>Student's Dashboard</h1>
                </header>
                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <div className="card-icon">👤</div>
                        <div className="card-details">
                            <p>Exam</p>
                            <h2>2</h2>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-icon">📄</div>
                        <div className="card-details">
                            <p>Attempts</p>
                            <h2>1</h2>
                        </div>
                    </div>
                    {/* <div className="dashboard-card">
                        <div className="card-icon">📊</div>
                        <div className="card-details">
                            <p>Results</p>
                            <h2>2</h2>
                        </div>
                    </div> */}
                    <div className="dashboard-card">
                        <div className="card-icon">📩</div>
                        <div className="card-details">
                            <p>Announcements</p>
                            <h2>1</h2>
                        </div>
                    </div>





                </div>
                <div className="recent-results">
                    <h3>:: General Instructions ::</h3>
                    <ul>
                        <li>
                            You are only allowed to start the test at the prescribed time. The timer will start frpm the current time irrespectve of when you start the exam andend when the given time is up.
                        </li>
                        <li>
                            you can see the history of test taken in the Results section.
                        </li>
                        <li>
                            To start the test, click on 'start' button in the exam section.
                        </li>
                        <li>
                            Once the test is started the timer would run irrespectve of your login or logout status. So it is recommended not to logout before the test completion
                        </li>
                        <li>
                            To mark an answer you need to select the option.
                        </li>
                    </ul>
                    {/* <button className="see-all-btn">See All</button> */}
                </div>
            </div>
        </div>
    );
};

export default Teacher;
