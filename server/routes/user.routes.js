// маршруты (routes)

const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller');
const {check} = require('express-validator');

router.post('/registration',[
    check('email', "Поле email не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)


router.get('/users', userController.getAllUsers)
//router.delete('/:id', userController.deleteUser)
router.delete('/:email', userController.deleteUser)

module.exports = router


// const Router = require('express');
// const router = new Router();
// const userController = require('../controllers/user.controller');
//
// router.post('/user', userController.createUser)
// router.get('/user', userController.getUsers)
// router.get('/user/:id', userController.getOneUser)
// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)
//
// module.exports = router