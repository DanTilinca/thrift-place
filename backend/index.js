// backend/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Importăm pachetul CORS
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

// Configurează CORS pentru a permite cererile din frontend
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json()); // Pentru a putea lucra cu JSON în request body

// Conectează rutele pentru autentificare
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
});
