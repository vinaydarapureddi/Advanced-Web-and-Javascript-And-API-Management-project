import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  totalNoOfReviews = 0
  sadReviews = 0
  goodReviews = 0
  normalReviews = 0
  userName = "Admin"
  userComment = ""
  comments = [
    {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
  ]

  videosList = [
    {
      videoName:'assets/videos/Video1.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video2.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video3.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video4.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video5.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video6.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video7.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    },
    {
      videoName:'assets/videos/Video8.mp4',
      comments:[
        {name : 'Sai',comment : 'Very Nice'},
        {name : 'Mahesh',comment : 'Very Nice.. Superb'},
        {name : 'Durga',comment : 'Very Nice.. I Like it'},
        {name : 'Krishna',comment : 'Very Nice.. I wanna see once more'},
        {name : 'Chiru',comment : 'Okay okay'}
      ]
    }
  ]

  onSad()
  {
    this.totalNoOfReviews = this.totalNoOfReviews + 1
    this.sadReviews = this.sadReviews +1
  }

  onCommentSubmit()
  {
    this.comments.push({
      name : 'Admin',
      comment : 'My Comment'
    })
  }

  onGood()
  {
    this.totalNoOfReviews = this.totalNoOfReviews + 1
    this.goodReviews = this.goodReviews+1
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onNormal()
  {
    this.totalNoOfReviews = this.totalNoOfReviews + 1
    this.normalReviews = this.normalReviews + 1
  }

  onLogout()
  {
    this.router.navigateByUrl('/home')
  }


}
