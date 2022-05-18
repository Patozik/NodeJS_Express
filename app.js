const express = require('express');
const port = 3000;

const app = express()
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Node JS - Main',
        pageBody: 'Hello Node JS!!!'
        
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        pageTitle: 'Node JS - Contact',
        pageBody: 'Website make Patozik'
    });
});

app.listen(port);