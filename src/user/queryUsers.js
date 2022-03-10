var {users} = require('./user')

module.exports ={
    getUser: ()=>{
        var result = users.findAll()
        return  result
      },
    getUserById: (args)=>{
        let id= args.id
        var result = users.findByPk(id)
        return  result
     },
}