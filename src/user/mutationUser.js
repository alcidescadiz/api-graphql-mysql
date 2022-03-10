var {users} = require('./user')

module.exports ={
    createUser: (args)=>{
        const {email, nombre, imagen, estado} = args
        var result = users.create({email, nombre, imagen, estado})
        return result
    }
}