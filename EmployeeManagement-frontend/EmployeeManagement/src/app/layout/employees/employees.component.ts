import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employees',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {



  ngOnInit(): void {
    this.FetchEmployee()
}

constructor(private employeeservice:EmployeeService,private cd: ChangeDetectorRef){}





EmployeeList :Employee[]=[];


FetchEmployee(){
  this.employeeservice.GetEmployee().subscribe((data) => {this.EmployeeList=data;
this.cd.detectChanges();

  })
}

  selectedEmp: Employee={
    
  
  employeeName: '',
  employeeAge: 0,
  emailId: '',
  department: '',
  role: '',
  salary: 0,
  joiningDate: ''
}


edit(emp:Employee){
  this.selectedEmp={...emp};
  
}
update(){
  this.employeeservice.UpdateEmployee(this.selectedEmp.id!,this.selectedEmp).subscribe((updatedEmp)=>{
 alert("updated successfully");
 this.FetchEmployee();

  })  
}
delete(empId:any){

const result=confirm("are u sure?")

if(result){
   this.employeeservice.deleteEmployee(empId).subscribe(()=>{
    this.FetchEmployee
    
  })
}
}
  
}










