import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../user-base.service';
import { Users } from '../mock-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userBase: UserBaseService) { }
  //accepts the objects via subscription
  users: Users[] = [];

  //Filtered array for looping
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

  filterAll(){ this.filteredUsers = this.users }

  filterActive(){ this.filteredUsers = this.activeUsers }

  filterInActive(){ this.filteredUsers = this.inActiveUsers }

  selectedUser?: Users;
  onSelect(user: any){
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
