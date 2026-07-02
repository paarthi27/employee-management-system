import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AddEmployeeComponent } from './layout/add-employee/add-employee.component';
import { EmployeesComponent } from './layout/employees/employees.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeManagement');
}
