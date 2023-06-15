const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {                                 // (условие) если класс ошибки ApiError, тогда
        return res.status(err.status).json({message: err.message})    // на клиент возращаем ответ со статус-кодом который будем получать из ошибки и сообщение, которое мы в эту ошибку поместили
    }
return res.status(500).json({message:"Непредвиденная ошибка!"})

}