import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/user-base.service';
import { Users } from 'src/app/mock-data';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userBase: UserBaseService) { }
  //accepts the objects via subscription
  users: Users[] = [];

  //array for looping
  filteredUsers: Users[] = [];

  //filtered arrays
  activeUsers: Users[] = [];
  inActiveUsers: Users[] = [];

  getUsers() {
    this.userBase.getUsers().subscribe(xyz => this.users = xyz);
    //filter active/inactive users
    this.activeUsers = this.users.filter(xyz => xyz.isActive == true);
    this.inActiveUsers = this.users.filter(xyz => xyz.isActive == false);
  }

  // function for each function
  filterAll() {
    this.filteredUsers = this.users;
    this.defaultList();
  }

  filterActive() {
    this.filteredUsers = this.activeUsers;
    this.defaultList();
  }

  filterInActive() {
    this.filteredUsers = this.inActiveUsers;
    this.defaultList();
  }

  selectedUser?: Users;
  onSelect(user: any) {
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  myToggle: boolean = true;
  defaultList() {
    if (this.filteredUsers.length >= 0) {
      this.myToggle = false;
    }
  }

}
