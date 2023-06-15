//для запроссов (for requests)
const db = require('../db');
const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');
const User = require('../models/models');
const {validationResult} = require('express-validator');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    // async registration(req, res) {
    //     const {name_person, surname} = req.body;
    //     const newUser = await db.query(`INSERT INTO person(name_person, surname) VALUES ($1, $2) RETURNING *`, [name_person, surname])
    //     res.json(newUser.rows[0])
    // }
    async registration(req, res, next) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return  res.status(400).json({message:'Oшибка при регистрации', errors})
            }
            const {email, password, role} = req.body;
            if (!email || !password) {
                return next(ApiError.badRequest("Некоректный email или password"))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest("Пользователь с таким email уже существует"))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, role, password: hashPassword})
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({message:"Пользватель успешно зарегистрирован", token})
        }catch (e){
            console.log(e)
            res.status(400).json({message:"Registration error"})
        }

    }

    async login(req, res, next) {
        const {email, password} = req.body;
        console.log(req.body)
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользватель не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указанный пароль неверный'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("Не задан  ID"))
        }
        return res.json(id)
    }


    async getAllUsers(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

    async deleteUser(req, res) {
        //const id = req.params.id;
        //const remoteUser = User.destroy({where: {id}})
        const email = req.params.email;
        const remoteUser = User.destroy({where: {email}})
        return res.json(remoteUser)
    }
}
module.exports = new UserController()

// class UserController {
//     async createUser(req, res) {
//         const {name_person, surname} = req.body;
//         const newPerson = await db.query(`INSERT INTO person(name_person, surname) values ($1,$2) RETURNING *`, [name_person, surname])
//         //console.log(name_person, surname)
//         //res.json(newPerson)
//         //return res.json(newPerson);
//         res.json(newPerson.rows[0])
//         //res.json('ok eee')
//     }
//
//     // async createUser(req, res) {
//     //     try {
//     //         const {name_person, surname} = req.body;
//     //         const newPerson = await db.query(
//     //             "INSERT INTO person(name_person, surname) VALUES ($1,$2)",
//     //             [name_person, surname]
//     //         );
//     //         res.json(newPerson.[0])
//     //     } catch (err) {
//     //         console.error(err.message);
//     //     }
//     // }
//
//
//     async getUsers(req, res) {
//         const users = await db.query(`SELECT * FROM person`)
//         res.json(users.rows)
//     }
//
//     async getOneUser(req, res) {
//         const id = req.params.id;
//         const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
//         res.json(user.rows[0])
//     }
//
//     async updateUser(req, res) {
//         const {id, name_person, surname} = req.body;
//         const user = await db.query(`UPDATE person set name_person = $1, surname = $2 WHERE id = $3 RETURNING *`, [name_person, surname, id])
//         res.json(user.rows[0])
//     }
//
//     async deleteUser(req, res) {
//         const id = req.params.id;
//         const user = await db.query(`DELETE FROM person WHERE id = $1`, [id])
//         res.json(user.rows[0])
//     }
// }


