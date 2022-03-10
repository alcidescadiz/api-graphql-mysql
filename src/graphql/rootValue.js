const {data} = require('../database/data.json')

var {getUser, getUserById} = require('../user/queryUsers')
var {createUser} = require('../user/mutationUser')

var root = { 
  hello: () => 'Hello world!',
  getData: (args)=>{
    let id= args.id
    var result = data.filter(x=>{
     return x.id == id;
    })
    return  result
  },
  getDatabyName: (args)=>{
    let first_name= args.first_name
    var result = data.filter(x=>{
     return x.first_name == first_name;
    })
    return  result
  },
  updateData : ({id, first_name}) => {
    var result = data.map(x => {
      if (x.id === id) {
        x.first_name = first_name;
        return x;
      }
    });
    return data.filter(x => x.id === id);
  },
  //-> User
  getUser: getUser,
  getUserById: getUserById,
  createUser: createUser
};

module.exports = {
  root
}