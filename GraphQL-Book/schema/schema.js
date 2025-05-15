import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }

    type Author {
        id: ID! #ID! bat buoc phai la tra ve 1 cai gi do
        name: String
        age: Int
        books: [Book]
    }

    # Root Type(Query, ...)
    type Query {
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }
`

export default typeDefs

