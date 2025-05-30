const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (optional)
// app.use(express.static(path.join(__dirname, 'public')));

// Define a route
app.get('/', (req, res) => {
    res.render('index', { title: ' EJS Express App', message:"hello i am vanshika" });
});

// Start the server
app.listen(3000 , () => {
    console.log('Server running on http://localhost:3000');
});