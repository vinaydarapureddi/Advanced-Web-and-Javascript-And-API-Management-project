import {Injectable} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
    providedIn : 'root'
})

export class RegistrationService {
    selectedUser : RegistrationComponent;
    users : RegistrationComponent[]
    
    constructor(private http:HttpClient) {
        this.selectedUser = new RegistrationComponent()
    }

    getUsers(){
        return this.http.get('http://localhost:3000')
    }

    postUsers(userReg:RegistrationComponent) {
       //return this.http.get('http://localhost:3000',userReg)
    }

    putUsers(userReg:RegistrationComponent) {
        //return this.http.get('http://localhost:3000/${user._id}',userReg)
    }

}