import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-user-table-component',
  templateUrl: './user-table-component.component.html',
  styleUrls: ['./user-table-component.component.scss']
})

export class UserComponentComponent implements OnInit {
  userListData: Observable<User[]> = new Observable();
  showRegisterComponent: boolean = false;
  userDataForEdit: User = {} as User;
  
  constructor(private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userListData = this.UserService.GetUsers();
  }

  deleteUser(userData: User) {
    this.UserService.deleteUser(userData);
    this.getUsers();
  }
}
