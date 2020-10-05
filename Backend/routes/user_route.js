const express = require('express')
const router = express.Router()
const User = require('../models/user_model.js')

//finding all users by get request
router.get('/',async(request,response) => {
  try {
      const users = await User.find()
      console.log("User")
      response.json(users)
  }catch(err){
    console.log("Get Request")
    response.send("Not able to find the users - "+err)
  }
})


//finding a particular user by get request
router.get('/:username',async(request,response) => {
  try {
      const user = await User.findById(req.params.username)
      response.json(user)
  }catch(err){
    console.log("Get Request")
    response.send("Not able to find the user - "+err)
  }
})


//creating a new user by post request
router.post('/',async(request,response)=>{
  console.log(request);
  console.log("post request")
  const userOb = new User({
    fname: request.body.fname,
    lname : request.body.lname,
    email : request.body.email,
    username : request.body.username,
    password : request.body.password,
    contactnumber : request.body.contactnumber
  })
  try {
    const userObj = await userOb.save()
  }catch(err){
    console.log("Post Request")
    response.send("Not able to create a new user - "+err)
  }
})

//updating the user password
router.patch('/:id',async(request,response)=>{
  try {
    const user = await User.findById(req.params.username)
    user.password = req.body.password
    const userObj = await user.save()
    response.json(userObj)

  } catch(err){
    response.send("Error"+err)
  }
})

module.exports=router