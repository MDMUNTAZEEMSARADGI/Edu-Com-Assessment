import React, { useState } from 'react';
import './AddExam.css';

const AddExam = () => {
    const [examName, setExamName] = useState('');
    const [description, setDescription] = useState('');
    const [examTime, setExamTime] = useState('');
    const [submissionTime, setSubmissionTime] = useState('');
    const [noOfQuestions, setNoOfQuestions] = useState('');
    const [examData, setExamData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleAddExam = (e) => {
        e.preventDefault();

        if (isEditing) {
            // Update the existing exam data
            setExamData({
                examName,
                description,
                examTime,
                submissionTime,
                noOfQuestions,
            });
            setIsEditing(false);
        } else {
            // Set the exam data state to display the information
            setExamData({
                examName,
                description,
                examTime,
                submissionTime,
                noOfQuestions,
            });
        }

        // Clear the form
        clearForm();
    };

    const clearForm = () => {
        setExamName('');
        setDescription('');
        setExamTime('');
        setSubmissionTime('');
        setNoOfQuestions('');
    };

    const handleEdit = () => {
        setIsEditing(true);
        // Populate the form with existing data
        setExamName(examData.examName);
        setDescription(examData.description);
        setExamTime(examData.examTime);
        setSubmissionTime(examData.submissionTime);
        setNoOfQuestions(examData.noOfQuestions);
    };

    const handleDelete = () => {
        setExamData(null);
        clearForm();
    };

    return (
        <>
            <div className="add-exam-wrapper">
                <div className="add-exam-container">
                    <h2>{isEditing ? 'Edit Exam' : 'Add New Exam'}</h2>
                    <form className="add-exam-form" onSubmit={handleAddExam}>
                        <div className="form-group">
                            <label htmlFor="examName">Exam Name:</label>
                            <input
                                type="text"
                                id="examName"
                                value={examName}
                                onChange={(e) => setExamName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="examTime">Exam Time:</label>
                            <input
                                type="datetime-local"
                                id="examTime"
                                value={examTime}
                                onChange={(e) => setExamTime(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="submissionTime">Submission Time:</label>
                            <input
                                type="datetime-local"
                                id="submissionTime"
                                value={submissionTime}
                                onChange={(e) => setSubmissionTime(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="noOfQuestions">Number of Questions:</label>
                            <input
                                type="number"
                                id="noOfQuestions"
                                value={noOfQuestions}
                                onChange={(e) => setNoOfQuestions(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="add-button">
                            {isEditing ? 'Update' : 'Add'}
                        </button>
                    </form>
                </div>

                {examData && (
                    <div className="exam-data-container">
                        <h3>Exam Details:</h3>
                        <p><strong>Exam Name:</strong> {examData.examName}</p>
                        <p><strong>Description:</strong> {examData.description}</p>
                        <p><strong>Exam Time:</strong> {examData.examTime}</p>
                        <p><strong>Submission Time:</strong> {examData.submissionTime}</p>
                        <p><strong>Number of Questions:</strong> {examData.noOfQuestions}</p>

                        <button className="edit-button" onClick={handleEdit}>Edit</button>
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default AddExam;
