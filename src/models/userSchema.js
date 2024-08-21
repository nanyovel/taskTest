import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{
        unique:true,
        trim:true,
        type:String
    },
    email:{
        unique:true,
        trim:true,
        type:String
    },
    password:{
        type:String
    }
}, )

export default userSchema('user',)