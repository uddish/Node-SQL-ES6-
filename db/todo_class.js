import connection from './../connection';

class Todo  {

    constructor()   {
        this.name = 'Todo';
    }

    // GET FUNCTION
    get = (res) =>    {
        connection.acquire((err, con) =>   {
            if(err) {
                console.log(err);
            }
            con.query('select * from todo_list', (err, result) =>   {       //result -> array of objects
                con.release();
                // console.log(result);         //returns array of objects containing names and id
                res.send(result);
            });
        });
    }

    // CREATE FUNCTION
    create = (name,res) => {
        connection.acquire((err, con) =>   {
            con.query('insert into todo_list (name) VALUES (?)', [name], (err, result) =>   {
                con.release();
                console.log(name);
                if(err) {
                    console.log(err);
                    res.send({status:1, message: 'Addition Failed!'});
                }
                else    {
                    res.send({status:0, message: 'Addition Completed!'});
                }
            });
            
        });
    };

    //UPDATE FUNCTION
    update = (todo, res) =>  {
        connection.acquire((err, con) =>    {
            con.query('update todo_list set name = ? where id = ?', [todo.name, todo.id], (err, result) =>    {
                con.release();
                    if(err) {
                        console.log(err);
                        res.send({status: 1, message: "Update Failed"});
                    }   
                    else{
                        res.send({status: 0, message: "Update Success"});
                    }
            });
        });
    }

    //DELETE FUNCTION
    delete = (id, res) =>  {
        connection.acquire((err, con) =>    {
            con.query('delete from todo_list where id = ?', [id], (err, result) =>  {
                con.release();
                if(err) {
                    console.log(err);
                    res.send({status: 1, message: "Delete Failed"});
                }   
                else{
                    res.send({status: 0, message: "Delete Success"});
                }
            })
        })
    }

}

const todo_obj = new Todo();

export default todo_obj;