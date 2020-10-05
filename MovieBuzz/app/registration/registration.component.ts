import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: `./registration.component.html`,
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {
  fname = "";
  lname = "";
  username = "";
  password = "";
  reenteredPassword = "";
  emailID = "";
  contactNumber = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitRegistrationReq() {
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.username);
    console.log(this.password);
    console.log(this.reenteredPassword);
    console.log(this.emailID);
    console.log(this.contactNumber);
    //this.router.navigateByUrl('/login')
    alert("You are successfully registered");
  }

  resetRegistrationReq() {
    this.fname = "";
    this.lname = "";
    this.username = "";
    this.password = "";
    this.reenteredPassword = "";
    this.emailID = "";
    this.contactNumber = "";
  }
}
