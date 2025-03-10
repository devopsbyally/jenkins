// Importing required modules
const express = require('express');
const app = express();
const port = 3000;

// Simple API endpoint
app.get('/', (req, res) => {
    res.send('Hello, World! This is a Node.js app with Jenkins and SonarQube.');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;