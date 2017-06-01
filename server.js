var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port   = process.env.PORT || 8080; // set our port

var router = express.Router();

router.get('/', function(request, response) {
	// console.log(request.query.name);
	response.json({ message: 'Welcome to our api ' + request.query.name + ' we heard you liked: ' + request.query.color });
})

router.post('/greet', function(req, res) {
	// console.log(req.body);
	// console.log(req.body.name);
	res.json({ message: 'hooray! welcome to our api ' + req.body.name + ' we heard you like ' + req.body.color});
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);
