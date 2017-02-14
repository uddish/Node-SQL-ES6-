let bodyparser = require('body-parser');
import express from 'express';
import connection from './connection';
let routes = require('./routes/todoRoute.js');

import bunyan from 'bunyan';

let app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//Log via BUNYAN
let log = bunyan.createLogger({name: 'myapp'});
log.info('Bunyan Log')
log.warn({lang: 'fr'}, 'au revoir');

connection.init();
routes.configure(app);

let server = app.listen(3000, () =>   {
    console.log('Server listening on port 3000...')
});
