import bcrypt from 'bcrypt'
import { connect } from '../database'
import { config, jwtConfig } from "../config";
import jwt from 'jsonwebtoken'

export const login = async (req, res, next) => {
    const connection = await connect();
    const rows = await connection.query('SELECT * FROM users WHERE userId=?', [req.body.userId])
    let usr=rows[0][0]  
    if (!res) {
        return console.log('user not found')
    }
   
    const match = await bcrypt.compare(req.body.password, usr.password);
    if (!match) {
        return console.log('wrong password')
    }

    const token=generateToken(req.body.userId)
    console.log(token)
    res.status(200).json({ token: token })
    next()
  
}



export const comparePassword = async (passInserted, passSaved) => {
    return await bcrypt.compare(passInserted, passSaved);
}

export const createUser = async (req, res) => {
    const connection = await connect();
    const secure = await encryptPass(req.body.password)

    const result = await connection.query('INSERT INTO users (userId, name, lastName, password, email) values (?, ?, ?, ?, ?)', [
        req.body.userId,
        req.body.name,
        req.body.lastName,
        secure,
        req.body.email
    ])

    if (req.body.rol) {
        req.body.rol.map((rol) => {
            connection.query('INSERT INTO usersRoles (userId, nameRole) values (?, ?)', [
                req.body.userId,
                rol
            ])
        })
    } else {
        console.log('no tiene rol')
        const resultRoles = connection.query('INSERT INTO usersRoles (userId, nameRole) values (?, ?)', [
            req.body.userId,
            'user'
        ])
    }


    const token=generateToken(req.body.userId)
    res.status(200).json(token)
}


export const generateToken = (user)=>{
    const secret = jwtConfig.SECRET
    const token = jwt.sign({ userId: user }, secret, {
        expiresIn: 46400 //24HS

    })
    return token
}

export const encryptPass = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    const encryptedPass = await bcrypt.hash(pass, salt)
    return encryptedPass
}