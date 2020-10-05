import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import {RegistrationService} from './registration/registration.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieBuzz';

  constructor(private registrationService:RegistrationService){ }

  getUsers() {
    this.registrationService.getUsers()
    .subscribe((res)=>{
      console.log("Hello");
      this.registrationService.users;
    })
  }

  postUser(form:NgForm){
    console.log("Hello This is post")
  }

}
