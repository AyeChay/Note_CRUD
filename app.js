var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var userRoutes = require('./routes/userRoute');
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.render('index');
});


var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

