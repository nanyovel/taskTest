import User from '../models/userSchema.js'

export const register=async(req,res)=>{
    const {username,password,email}=req.body

    const newUser=User({
        username,
        password,
        email
    })

    // const userSaved=newUser.save()
    const userSaved=await newUser.save()
    console.log(userSaved)

    console.log(newUser)
    console.log(req.body)
    res.send('register')
}