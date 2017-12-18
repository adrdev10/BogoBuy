var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');


var index = require('./routes/index');
var products = require('./routes/products');

var app = express();
app.use(cors());
                                                                                                                                                

//port number
const port = 3000;

//set static folder for angular project
app.use(express.static(path.join(__dirname, 'client')));


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', products);

app.listen(port,()=>{
    console.log('Server has started on port' + port);
});

