import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { EmployeesComponent } from './layout/employees/employees.component';
import { AddEmployeeComponent } from './layout/add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


export const routes: Routes = [{path:'',component:LoginComponent},
   {
    path: '',
    component: SidebarComponent,   // 👈 MAIN LAYOUT
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'add-employee', component: AddEmployeeComponent }
    ]
  }];
