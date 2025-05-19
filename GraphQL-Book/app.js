import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import mongoose from 'mongoose';
// const mongoose = require('mongoose')

// Load schema % resolvers
import typeDefs from './schema/schema.js'
import resolvers from './resolver/resolver.js'

import mongoDataMethods from './data/db.js'
// const mongoDataMethods = require('./data/db.js')

// conenect DB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://lam3082004:lam3082004@learngraphql.xx1yjtk.mongodb.net/',)
        
        console.log("MongoDB connnected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // plugins: [
    //     ApolloServerPluginLandingPageLocalDefault({ embed: true }), // 
    // ],
    context: () => ({mongoDataMethods}),
})

const app = express()
await server.start()
server.applyMiddleware({ app })

app.listen({port: 4000}, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
})