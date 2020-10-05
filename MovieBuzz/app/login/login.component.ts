import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from } from 'rxjs'
import {Router} from '@angular/router'
@Injectable({
  providedIn : 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  //selectedUser: Users;  
  username = "";
  password = "";
  constructor(private http:HttpClient,private router:Router) { 
    //this.selectedUser = new Users();
  }

  /*getUsers()
  {
    this.http.get('http://localhost:3000')
  }

  postUsers(user:User) {
    this.http.get('http://localhost:3000',user)
  }

  putUser(user:User) {
    this.http.get('http://localhost:3000/${user._id}',user)
  }*/

  ngOnInit(): void {
  }

  onSubmitButtonClick(){
    this.router.navigateByUrl('/dashboard')
  }

}
