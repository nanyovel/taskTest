import mongoose from 'mongoose'

const conectarDB=async()=>{
    try {
        mongoose.connect('mongodb+srv://jperezjimenez06:Nanyovel17@cluster0.5exvait.mongodb.net/caelossNode?retryWrites=true&w=majority&appName=Cluster0')
        console.log('base conectada!!!')
    } catch (error) {
        console.log(error)
    }
}

export default conectarDB