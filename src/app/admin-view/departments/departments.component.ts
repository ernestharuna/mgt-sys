import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/user-base.service';
import { CommonModule } from '@angular/common';
import { Dept } from 'src/app/mock-data';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private userBase: UserBaseService) { }
  departments: Dept[] = [];

  getDept(){
    this.userBase.getDept().subscribe(xyz => this.departments = xyz)
  }

  ngOnInit(): void {
    this.getDept()
  }
}