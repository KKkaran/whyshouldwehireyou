const {User} = require("../models")

const resolvers = {
  
    Query: {
        Users: async() => {
            return User.find()
        }
    },
    Mutation: {
        addUser: async (parent, args)=>{
            
            return User.create(args)
        },
        deleteUsers: async () => {
            User.delete()
        }
    }

};

module.exports = resolvers;