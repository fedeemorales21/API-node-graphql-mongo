import Film from '../models/Film'

export const resolvers = {

    Query: {

        async Films(){
            return await Film.find()
        },

        async FilmPerId( _ , _id ){
            return await Film.findById(_id)
        }

    },

    Mutation: {

        async createFilm( _ , { input } ) {
            const newFilm = new Film(input)
            return await newFilm.save()
        },

        async deleteFilm( _ , { _id } ){
            return await Film.findByIdAndDelete(_id)
        },

        async updateFilm( _ , { _id, input } ){
            return await Film.findByIdAndUpdate(_id, input , { new: true })
        }

    }
}