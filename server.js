// SETUP//////////////////////////////////////////////////////////////////

// DEPENDENCIES
var express      = require('express'),
    morgan       = require('morgan'),
    mongoose     = require('mongoose'),
    cookieParser = require('cookie-parser'),
    stormpath    = require('express-stormpath');

var app = express();
var port = process.env.PORT || 3000;

// lISTENER
app.on('stormpath.ready',function(){
  console.log('Stormpath Ready');
  app.listen(3000);
});

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cookieParser());
app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true
  }
}));
app.use(express.static('public'));

// MONGO
mongoose.connect('mongodb:/localhost/goal_maker')

// ROUTES///////////////////////////////////////////////////////////////////

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});



// TERMINAL MSGS//////////////////////////////////////////////////////////
console.log('Silence please...');
setTimeout(function(){console.log('Curtains up...')}, 3000);
console.log('Server started on ' + port);

// TEMP STUFF && GARBAGE//////////////////////////////////////////////////
