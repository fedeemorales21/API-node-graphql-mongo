import { resolvers } from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
    type Query {
        Films: [Film]
        FilmPerId(_id:ID): Film
    }

    type Mutation {
        createFilm(input:FilmInput):Film
        deleteFilm(_id: ID):Film
        updateFilm(_id: ID, input:FilmInput):Film
    }


    type Film {
        _id: ID
        title: String
        year: Int
        director: String
    }

    input FilmInput {
        title: String!
        year: Int!
        director: String!
    }

`

export default makeExecutableSchema({ typeDefs,resolvers })