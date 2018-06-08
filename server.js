const express = require('express');
const ejs =require('ejs');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine','ejs');

app.use(express.static(__dirname + "./public"));

app.get('/', (req,res) => {
	res.render('home',{pageTitle:"welcome to my web site"});
});

app.get('/about', (req,res) => {
	res.render('about',{pageTitle:"About page"});
});

app.get('/projects', (req,res) => {
	res.render('projects',{pageTitle:"Projects page"});
});

app.listen(port, () => {
	console.log(`server has started on port ${port}`);
})