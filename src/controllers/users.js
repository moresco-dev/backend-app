import { connect } from '../database'

export const getUsers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users');
    res.json(rows);
}


export const getUserById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users where id=?', [req.params.id]);
    res.json(rows[0])
}

export const getUserByIdOriginal = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users where id=?', [req.params.id]);
    res.json(rows[0])
}


export const verifyUserById = async (id) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users where id=?', id);
    return (rows[0])
}

export const verifyUserByUserId = async (userId) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM users where userId=?', userId);
    return (rows[0])
}

export const getRolesByUser = async (userId)=>{
    const connection = await connect();
    const [roles] = await connection.query('SELECT * FROM usersroles where userId=?', userId)
    return  ([roles])
}








