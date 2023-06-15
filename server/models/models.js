const sequelize = require('../db');
const {DataTypes} = require('sequelize');

//console.log('sequelize START', 'sequelize FINISH')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING,defaultValue:"USER"},
})

module.exports = User
//
//
// console.log(User === sequelize.models.User, "CHECK MODEL")
// console.log(User.create(), "User")
// console.log(sequelize.models.User, "sequelize.models.User")
// console.log(sequelize.models, "sequelize.models")

//Executing (default): SELECT "id", "email", "password", "role", "createdAt", "updatedAt" FROM "Users" AS "User" WHERE "User"."email" = '33vovaerohin1@gmail.com';
// Executing (default): INSERT INTO "Users" ("id","email","password","role","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING "id","email","password","role","createdAt","upd
// atedAt";

