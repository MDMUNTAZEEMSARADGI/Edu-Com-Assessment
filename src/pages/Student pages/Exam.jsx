import React, { useState, useEffect } from 'react';
import './Exam.css';

const questions = [
    {
        questionText: 'The IETF standards documents are called',
        options: ['RFC', 'RCF', 'ID', 'DFC'],
        correctAnswer: 0
    },
    {
        questionText: 'In the layer hierarchy as the data packet moves from the upper to the lower layers, headers are',
        options: ['Added', 'Removed', 'Rearranged', 'Modified'],
        correctAnswer: 0
    },
    {
        questionText: 'The structure or format of data is called',
        options: ['Syntax', 'Semantics', 'Struct', 'Formatting'],
        correctAnswer: 2
    },
    {
        questionText: 'Communication between a computer and a keyboard involves _______________ transmission.',
        options: ['Automatic', 'Half-duplex', 'Full-duplex', 'Simplex'],
        correctAnswer: 3
    }
];

const Exam = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timer, setTimer] = useState(210); // 3 minutes 30 seconds
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            handleSubmit();
        }
    }, [timer]);

    const handleOptionChange = (questionIndex, optionIndex) => {
        setSelectedAnswers({ ...selectedAnswers, [questionIndex]: optionIndex });
    };

    const handleSubmit = () => {
        setSubmitted(true);
        // Here you can calculate the score and show the result
    };

    const handleReset = () => {
        setSelectedAnswers({});
        setCurrentQuestion(0);
        setTimer(210);
        setSubmitted(false);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    if (submitted) {
        const score = Object.keys(selectedAnswers).reduce(
            (acc, key) =>
                selectedAnswers[key] === questions[key].correctAnswer
                    ? acc + 1
                    : acc,
            0
        );
        return (
            <div className="exam-container">
                <h2>Your Score: {score}/{questions.length}</h2>
                <p>Percentage: {((score / questions.length) * 100).toFixed(2)}%</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    }

    return (
        <div className="exam-container">
            <div className="exam-header">
                <h1>Student Dashboard</h1>
                <p>Exam name: Computer Network</p>
                <p>Description: MCQ questions on basic CN</p>
                <p className="timer">Timer: {formatTime(timer)}</p>
            </div>
            {questions.map((question, index) => (
                <div key={index} className="question-section">
                    <h2>Q{index + 1}. {question.questionText}</h2>
                    {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="option">
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={optionIndex}
                                checked={selectedAnswers[index] === optionIndex}
                                onChange={() => handleOptionChange(index, optionIndex)}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
    );
};

export default Exam;
