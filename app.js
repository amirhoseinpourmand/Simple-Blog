const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog-routes');

const app = express();
const port = 3000;

// Register View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Connect to MongoDB
const dbURI = 'mongodb+srv://amir:test1234@nodejs.toc90eg.mongodb.net/?appName=nodejs'

mongoose.connect(dbURI)
    .then(() =>
        app.listen(port, () => {
            console.log(`Listening on Port ${port}...`);
        })
    )
    .catch((err) => { console.log(err) })

// Middleware and Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Main Page
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

//Blog Routes
app.use('/blogs', blogRoutes);

// 404 Page
app.use((req, res) => {
    res.render('404', { title: '404' })
});