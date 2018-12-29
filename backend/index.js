const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3030);

app.listen(app.get('port'), () => {
	console.log(`Servidor en el puerto ${app.get('port')}`);
});