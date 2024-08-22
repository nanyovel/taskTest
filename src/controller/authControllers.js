export const register=(req,res)=>{
    const {username,password,email}=req.body
    console.log(req.body)
    res.send('register')
}