var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./routes/userRoute');
var apiRoutes = require('./routes/apiRoutes');

app.use('/', userRoutes);
app.use('/api', apiRoutes);

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
