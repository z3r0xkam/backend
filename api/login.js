const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mock user data
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = app;