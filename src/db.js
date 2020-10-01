import mongoose from 'mongoose'

export async function conn() {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true  

        })

        console.log("DB is connected")

    } catch (error) {
        console.log(error)
    }
}
