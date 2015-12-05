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
// app.on('stormpath.ready',function(){
  // console.log('Stormpath Ready');
  app.listen(port);
  console.log('Silence please...');
  setTimeout(function(){console.log('Curtains up...')}, 3000);
  console.log('Server started on ' + port);
// });

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static('views'));
// app.use(stormpath.init(app, {
//   website: true,
//   expand: {
//     customData: true
//   }
// }));

// MONGO
mongoose.connect('mongodb:/localhost/goal_maker')

// ROUTES///////////////////////////////////////////////////////////////////

app.get('/test', function(req, res) {
  res.send('Sim Sim Salabim')
});


// TEMP STUFF && GARBAGE//////////////////////////////////////////////////
