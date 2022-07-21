import { Injectable } from '@angular/core';
import { Users } from './mock-data';
import { allUsers } from './mock-data';
import { Observable, of } from 'rxjs';
import { Dept } from './mock-data';
import { dept } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class UserBaseService {

  getUsers(): Observable<Users[]> {
    const user = of(allUsers);
    return user;
  }

  getDept(): Observable<Dept[]> {
    const department = of(dept);
    return department;
  }
  constructor() { }
}
