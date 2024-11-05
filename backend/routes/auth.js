const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificăm dacă utilizatorul există deja
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Criptează parola
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creează utilizatorul
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifică dacă utilizatorul există
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compară parola
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Generează token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error('Login error:', error); // Afișează eroarea în consola backend-ului
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});
  
  module.exports = router;
  