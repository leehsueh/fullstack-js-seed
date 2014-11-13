var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var io = require('socket.io').listen(server);

var helloRoutes = require('./routes/hello');
var userRoutes = require('./users/routes');

var app = express();
var server = require('http').createServer(app);


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/app')));

// Database setup
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback() {
  console.log('DB connected!');
});

// Routes
app.use('/api', helloRoutes);
app.use('/api/users', userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// Socket.io Communication
// io.sockets.on('connection', require('./routes/socket'));

/**
 * Start Server
 */
 app.set('port', process.env.PORT || 8000);
 console.log('Port: ' + app.get('port'))
 server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

 module.exports = app;