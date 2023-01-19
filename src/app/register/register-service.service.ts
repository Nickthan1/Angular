import { RegisterInterface } from './../interfaces/register.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
const URLs = {
  registerUserURL: "http://localhost:8080/Tecniko-1.0-SNAPSHOT/resources/register"
}

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  registerUser(userData: User) {

    console.log(userData);



    this.http.post<string>(URLs.registerUserURL,

      //JSON.stringify({ userData }),
      userData,
      {

        headers: {

          Accept: "application/json"

        }

      }).subscribe((msg: string) => {

        console.log(msg);

      })

  }

}

