const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',              // Replace with your MySQL username
    password: '',              // Replace with your MySQL password
    database: 'My_Assessments'  // Replace with your database name
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// API endpoint to get all assessments
app.get('/api/assessments', (req, res) => {
    const sql = 'SELECT * FROM assessments';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving assessments.');
            return;
        }
        res.json(results);
    });
});

// API endpoint to get all users
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving users.');
            return;
        }
        res.json(results);
    });
});

// API endpoint to get all activities
app.get('/api/activities', (req, res) => {
    const sql = 'SELECT * FROM activities';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving activities.');
            return;
        }
        res.json(results);
    });
});

// API endpoint to get all analytics
app.get('/api/analytics', (req, res) => {
    const sql = 'SELECT * FROM analytics';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving analytics.');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
