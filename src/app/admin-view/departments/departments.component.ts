import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/user-base.service';
import { Dept } from 'src/app/mock-data';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private userBase: UserBaseService) { }

  department: Dept[] = [];

  getDept(){
    this.userBase.getDept().subscribe(xyz => this.department = xyz)
  }

  showList(dept: Dept){
    alert(dept.department)
  }

  ngOnInit(): void {
    this.getDept()
  }
}