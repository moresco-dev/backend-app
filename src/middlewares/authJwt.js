import jwt from 'jsonwebtoken'
import { config, jwtConfig } from '../config'
import { verifyUserByUserId, getRolesByUser } from '../controllers/users'

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) return res.status(403).json({ message: 'no token provided' })
    try {
        const decoded = jwt.verify(token, jwtConfig.SECRET)
        const user = verifyUserByUserId(decoded.userId)
        req.userId = decoded.userId
        if (!user) return res.status(404).json({ message: 'user not founded' })
        next()
    } catch (err) {
        return res.status(404).json({ message: 'invalid token: ' + err })
    }
}

export const isModerator = async (req, res, next) => {
    const [roles] = await getRolesByUser(req.userId)
    if (![roles]) {
        return console.log('roles not found')
    }

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nameRole === 'moderator') {
            return next()
        }
    }
    return res.status(404).json("This access needs a 'moderator' role.")
}

export const isAdmin = async (req, res, next) => {
    const [roles] = await getRolesByUser(req.userId)
    if (![roles]) {
        return console.log('roles not found')
    }

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nameRole === 'admin') {
            return next()
        }
    }
    return res.status(404).json("This access needs a 'admin' role.")
}