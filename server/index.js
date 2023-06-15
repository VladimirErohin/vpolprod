require('dotenv').config();
const express = require('express');
// const userRouter = require('./routes/user.routes');
// const postRouter = require('./routes/post.routes');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const sequelize = require('./db')
const models = require('./models/models')

const PORT = process.env.PORT || 5000;

//const pool = require('./db')

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler) // должен идти всегда последним
// app.use('/api', userRouter);
// app.use('/api', postRouter);


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        console.log('Connection has been established successfully.');
        console.log(models)

        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
    }
}

start()

// app.post("/user", async (req, res) => {
//     try {
//         const {name_person, surname} = req.body;
//         const newPerson = await pool.query(
//             "INSERT INTO person (name_person, surname) VALUES ($1,$2) RETURNING *",
//             [name_person, surname]
//         );
//         res.json(newPerson)
//         console.log(name_person, surname)
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//app.listen(PORT, () => console.log(`Server started on ${PORT}`));


// app.get('/', (req,res)=>{
//     res.json({
//         message:'Hello from backend5!!!'
//     })
// })