import express from 'express'
import { ApolloServer } from 'apollo-server-express' 
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

// Load schema % resolvers
import typeDefs from './schema/schema.js'
import resolvers from './resolver/resolver.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }), // 👈 cái này là quan trọng
      ],
})

const app = express()
await server.start()
server.applyMiddleware({ app })

app.listen({port: 4000}, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
})