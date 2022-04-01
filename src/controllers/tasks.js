import {connect} from '../database'

export const getTasks = async (req, res)=>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks');
    res.json(rows)
}

export const getTask = async (req, res)=>{
    const connection = await connect();
    const [rows]= await connection.query('SELECT * FROM tasks where id=?',[req.params.id]);
    res.json(rows[0])
}

export const getTaskCount = async (req, res)=>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT count(id) FROM tasks');
    res.json(rows[0]["count(id)"])
}

export const saveTask = async (req, res)=>{
    const connection = await connect();
    const result = await connection.query('INSERT INTO tasks (title, description) values (?, ?)',[
        req.body.title, 
        req.body.description
        ])
    res.sendStatus(204);
    console.log(result)
}

export const delelteTask = async (req, res)=>{
    const connection = await connect();
    await connection.query('DELETE FROM tasks where id=?', [req.params.id]);
    res.sendStatus(204);
}

export const updateTask = async (req, res)=>{
   const connection = await connect();
   const result = await connection.query('UPDATE tasks SET title=?, description=? where id=?', [req.body.title, req.body.description, req.params.id])
   res.sendStatus(204);
}
