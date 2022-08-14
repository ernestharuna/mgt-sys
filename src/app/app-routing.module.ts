import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-view/admin-dashboard/admin-dashboard.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DepartmentsComponent } from './admin-view/departments/departments.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', title: 'Welcome | login', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'admin-view', component: AdminViewComponent,
    children: [
      { path: 'dashboard', title: 'Dashboard', component: AdminDashboardComponent },
      { path: 'departments', title: 'Departments', component: DepartmentsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
