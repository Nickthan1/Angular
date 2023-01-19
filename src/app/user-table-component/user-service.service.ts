import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
const URLs = {
  getUserURL: "http://localhost:8080/Tecniko-1.0-SNAPSHOT/resources/admin/getOwners",
  deleteUser: "http://localhost:8080/Tecniko-1.0-SNAPSHOT/resources/customer/deleteAccount"
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }
  GetUsers(): Observable<any> {
    return this.http.get<User[]>(URLs.getUserURL)
  }
  deleteUser(userData: User) {
    console.log(userData);
    
    this.http.delete<string>(URLs.deleteUser + "/" + userData.id,
      {
        headers: {
          Accept: "application/json"
        }
      }).subscribe()
  }
}
