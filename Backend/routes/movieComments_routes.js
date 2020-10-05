const express = require('express')
const router = express.Router()
const MovieComments = require('../models/movieComment_model')

//finding all the movie comments
router.get('/',async(request,response) => {
  try {
      const comments = await MovieComments.find()
      console.log("comments")
      response.json(comments)
  }catch(err){
    console.log("Get Request")
    response.send("Not able to find the comments - "+err)
  }
})


//creating a new comment
router.post('/',async(request,response)=>{
  let date_ob = Date.now();
  console.log(request);
  const movieObj = new MovieComments({
    movieName: request.body.movieName,
    userName : request.body.userName,
    comment : request.body.comment,
    createdOn : date_ob
  })
  try {
    const movieCommentObj = await movieObj.save()
  }catch(err){
    console.log("Post Request")
    response.send("Not able to create a comment - "+err)
  }
})


module.exports=router