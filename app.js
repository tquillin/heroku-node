var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/products_api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./server/routes/index');
var productsRouter = require('./server/routes/api/products');

app.get('/inventory', function(req, res){
  res.render('views/inventory');
});

app.use('/inventory', productsRouter);



app.use('/', indexRouter);
app.use('/api/products', productsRouter);

var port = 8080;
app.listen(port, function(){
  console.log("je t'écoute..." + port);
});



// make express look in the public directory for assets (css/js/img)

// set the home page route
// app.get('/', function(req, res) {
//
//     // ejs render automatically looks in the views folder
//     res.render('index');
// });
//
// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });
