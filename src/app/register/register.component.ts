import { UserRole } from './../enums/user-role';
import { RegisterInterface } from './../interfaces/register.interface';
import { Component, Input } from '@angular/core';
import { RegisterServiceService } from './register-service.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Input() dataForUpdate: User = {} as User;

  newUser: User = {

    // id: 12323123,
    // role: "ADMIN"

  } as User;



  constructor(private service: RegisterServiceService) { }



  registerUser(newData: User) {

    console.log(this.newUser, newData);



    this.service.registerUser(newData);

  }

}