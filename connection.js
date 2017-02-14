import mysql from 'mysql';

// const connection = {};
// // connection.pool = null;

// connection.init = () => {
   
// }

// connection.pool = mysql.createPool(   {             //database name -> todo_es6
//         connectionLimit: 10,                        //database table name -> todo_list
//         host: 'localhost',                          //columns -> name, id
//         user: 'root',
//         password: 'uddish22',
//         database: 'todo_es6'
//     });

// connection.acquire = (callback) => {
//         connection.pool.getConnection((err, connection) => {
//             callback(err, connection);
//         });
// };

// export default connection;


/**
 * connection using class
 */
class connection    {

    constructor()   {
        this.init();
    }

    init = () =>    {
        connection.pool = mysql.createPool(   {             //database name -> todo_es6
        connectionLimit: 10,                                //database table name -> todo_list
        host: 'localhost',                                  //columns -> name, id
        user: 'root',
        password: 'uddish22',
        database: 'todo_es6'
        });
    }

    acquire = (callback) => {
        connection.pool.getConnection((err, connection) => {
            callback(err, connection);
        });
        
    };

}

const con_obj = new connection();
export default con_obj;