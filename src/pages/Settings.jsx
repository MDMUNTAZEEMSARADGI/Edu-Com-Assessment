import React, { useState } from 'react';
import './Settings.css'

const Settings = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const handleImageChange = (e) => {
        setProfileImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleUpdate = () => {
        // Implement the logic to update the profile settings here
        alert('Profile Updated!');
    };

    return (
        <div className="settings-container">
            <h2>My Profile</h2>
            <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="profileImage">Add Image:</label>
                    <input type="file" id="profileImage" accept="image/*" onChange={handleImageChange} />
                    {profileImage && <img src={profileImage} alt="Profile Preview" className="profile-preview" />}
                </div>

                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button type="submit" onClick={handleUpdate} className="update-button">Update</button>
            </form>
        </div>
    );
};

export default Settings;
