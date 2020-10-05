const express = require('express')
const movieRatingWRTUser = require('../models/movieRatingWRTUser')
const router = express.Router()


//finding all the movie comments
router.get('/',async(request,response) => {
  try {
      const rating = await movieRatingWRTUser.find()
      console.log("Rating")
      response.json(rating)
  }catch(err){
    console.log("Get Request")
    response.send("Not able to find the Rating - "+err)
  }
})


//creating a new comment
router.post('/',async(request,response)=>{
  let date_ob = Date.now();
  console.log(request);
  const movieObj = new movieRatingWRTUser({
    movieName: request.body.movieName,
    userName : request.body.userName,
    rating : request.body.rating,
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