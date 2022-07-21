import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', title: 'Welcome | login', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'nav-bar', title: '', component: NavBarComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path:'dashboard', title: 'Dashboard', component: DashboardComponent },
      { path: 'departments', title: 'Departments', component: DepartmentsComponent }
    ],
  },
];



// const routes: Routes = [
//   {
//     path: 'first-component',
//     component: FirstComponent, // this is the component with the <router-outlet> in the template
//     children: [
//       {
//         path: 'child-a', // child route path
//         component: ChildAComponent, // child route component that the router renders
//       },
//       {
//         path: 'child-b',
//         component: ChildBComponent, // another child route component that the router renders
//       },
//     ],
//   },
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
