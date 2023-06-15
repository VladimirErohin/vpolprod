const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
        dialect:'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }

)//


// const Pool = require("pg").Pool;
//
// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
// })
//
// module.exports = pool;

// user: process.env.DB_USER,
//  password: process.env.DB_PASSWORD,
//  host: process.env.DB_HOST,
//  port: process.env.DB_PORT,
//  database: process.env.DB_NAME

//    user: "postgres",
//     password: "uladzimir88",
//     host: "localhost",
//     port: 8080,
//     database: " vp_authorization_user"

//PORT = 5000
// DB_NAME = vp_authorization_user
// DB_USER = postgres
// DB_PASSWORD = uladzimir88
// DB_HOST = localhost
// DB_PORT = 5432