import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  totalNoOfReviews = 0
  sadReviews = 0
  goodReviews = 0
  normalReviews = 0
  userName = "Admin"
  moviesList = [
    {
      movieName:'/assets/images/Inception.jpg',
      videoName:'/assets/videos/Video1.mp4',
    },
    {
      movieName:'/assets/images/Ala.jpg',
      videoName:'assets/videos/Video2.mp4',
    },
    {
      movieName:'/assets/images/Avengers.jpg',
      videoName:'assets/videos/Video3.mp4',
    },
    {
      movieName:'/assets/images/Baahubali.jpg',
      videoName:'assets/videos/Video4.mp4',
    },
    {
      movieName:'/assets/images/Dolittle.jpg',
      videoName:'assets/videos/Video5.mp4',
    },
    {
      movieName:'/assets/images/Jersey.jpg',
      videoName:'assets/videos/Video6.mp4',
    },
    {
      movieName:'/assets/images/Joker.jpg',
      videoName:'assets/videos/Video7.mp4',
    },
    {
      movieName:'/assets/images/Maharshi.jpg',
      videoName:'assets/videos/Video8.mp4',
    },
    {
      movieName:'/assets/images/Nishabbadam.jpg',
      videoName:'assets/videos/Video9.mp4',
    },
    {
      movieName:'/assets/images/Scoob.jpg',
      videoName:'assets/videos/Video10.mp4',
    },
    {
      movieName:'/assets/images/Revenant.jpg',
      videoName:'assets/videos/Video11.mp4',
    },
    {
      movieName:'/assets/images/Hit.jpg',
      videoName:'assets/videos/Video12.mp4',
    },
    
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onVideoLink(link)
  {
    this.router.navigateByUrl('/play')
  }

  onSad()
  {
    this.totalNoOfReviews = this.totalNoOfReviews + 1
    this.sadReviews = this.sadReviews +1
  }

  onGood()
  {
    this.totalNoOfReviews = this.totalNoOfReviews + 1
    this.goodReviews = this.goodReviews+1
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
