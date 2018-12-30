const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('./config/auth');
const { games, users, sessions, gamePlayers } = require('./routes');
const http = require('http');
const socketAuth = require('./config/socket-auth');
const socketIO = require('socket.io');

const app = express();

//Middlewares
app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(games(io))
  .use(gamePlayers(io))
  .use(users)
  .use(sessions)

  // catch 404 and forward to error handler
  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  });

app.set('port', process.env.PORT || 3030);

app.listen(app.get('port'), () => {
	console.log(`Servidor en el puerto ${app.get('port')}`);
});