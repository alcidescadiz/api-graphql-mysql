const { Sequelize, DataTypes } = require('sequelize');
const  {cnx}  = require('../database/index')

const users = cnx.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
        
    }
}, {
    tableName: 'users',
    createdAt: false,
    updatedAt: false
    
});


module.exports = {
    users
}
