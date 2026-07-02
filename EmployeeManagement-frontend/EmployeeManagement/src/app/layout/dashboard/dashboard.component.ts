import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {


 

  totalEmployees: number = 0;

  

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){

    this.employeeService.countEmployees().subscribe((data)=>{

      this.totalEmployees=data;


    })

  }



  
}
