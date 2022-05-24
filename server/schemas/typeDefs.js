const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User{
        firstName:String,
        friend:String,
        personality:String
    }

    type Query{
        Users: [User]
    }

    type Mutation{
        addUser(firstName:String!, friend:String!, personality:String!):User
        deleteUsers:String
    }
`;












module.exports = typeDefs;