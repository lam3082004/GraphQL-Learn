// import {books, authors} from '../data/static.js'
import mongoDataMethods from '../data/db.js'
import Author from '../models/Author.js'
import Book from '../models/Book.js'
// const Author = require('../models/Author.js')

const resolvers = {

    // Query
    Query: {
        books: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllBooks(),
        // books: () => books,
        book: async(parent, {id}, {mongoDataMethods}) => await mongoDataMethods.getBookById(id),
        authors: async(parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllAuthors(),
        author: async (parent, {id}, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(id)
    },
    Book: {
      author: async ({authorId}, args, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId)
    },
    Author: {
        books: async ({id}, args, {mongoDataMethods}) => await mongoDataMethods.getAllBooks({authorId: id})
    },

    // Mutation 
    Mutation: {
        createAuthor: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createBook(args)
      }
      
}

export default resolvers