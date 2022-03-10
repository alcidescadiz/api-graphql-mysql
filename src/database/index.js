const env = require('dotenv').config()
const  {Sequelize} = require('sequelize')

database= process.env.DATABASE
usuario= process.env.USUARIO
password= process.env.PASSWORD
host= process.env.HOST

const cnx = new Sequelize(database, usuario, password, {
    host: host,
    port: 3306,
    dialect: 'mysql'
})

cnx.sync().then(function(){
    console.log("BD sincronizada")
})

module.exports = {
    cnx
}