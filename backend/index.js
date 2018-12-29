const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3030);

app.listen(app.get('port'), () => {
	console.log(`Servidor en el puerto ${app.get('port')}`);
});