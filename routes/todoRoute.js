import todo from './../models/todo.js';
import todo_obj from './../db/todo_class.js';

import bunyan from 'bunyan';

//BUNYUN LOGGER
let log = bunyan.createLogger({
    name: 'myapp',
    stream: process.stdout,
    level: 'info'
});

module.exports =    {
    configure: (app)    =>  {

        app.get('/', (req, res) =>   {
            res.send('HELLO');
        });

         app.post('/', (req, res) =>   {                     //Post test
            res.send('Post Success');
            log.info('URL -> ', req.url);
        });

         app.get('/todo/', (req, res) =>   {
            // todo.get(res);                       //call via todo function
            todo_obj.get(res);                      //call via todo class
            log.info('Device -> ', res._headers);
            log.info('Routes -> ', req.route);
            log.info('IP -> ', req.connection.remoteAddress);

        });

        app.post('/todo/', (req, res) =>    {
            // todo.create(req.body.name, res);
            todo_obj.create(req.body.name, res);
            log.info(res);
        });

        app.put('/todo/', (req, res) => {
            // todo.update(req.body, res);
            todo_obj.update(req.body, res);
        });

        app.delete('/todo/', (req, res) =>  {
            // todo.delete(req.body.id, res);
            todo_obj.delete(req.body.id, res);
        })

    }
}
