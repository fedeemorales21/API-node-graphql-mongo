import { Schema, model } from 'mongoose'

const filmSchema = new Schema({
    title: {
        type: String,
        required: true   
    },
    year:{
        type: Number,
        required: true
    },
    director:{
        type: String,
        required: true
    }
})

export default model('Film',filmSchema)