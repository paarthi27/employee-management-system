import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {

  EmployeeForm!:FormGroup;
  // EmployeeList: any;

  constructor(private EmployeeService: EmployeeService,
    private fb: FormBuilder
  ){}
  
 
ngOnInit():void{
this.EmployeeForm = this.fb.group({

  employeeName :['',[Validators.required,Validators.maxLength(10)]],
  employeeAge:[0,[Validators.required,Validators.max(99)]],
  emailId:['',[Validators.required,Validators.email]],
  department:['',[Validators.required]],
  role:['',[Validators.required]],
  salary:[0,[Validators.required]],
  joiningDate:['',[Validators.required]]

  
})
}
 
CreateEmployee():void{
if(this.EmployeeForm.invalid){
  alert("please fill all the field");
  return;
}

const NewEmployee : Employee = this.EmployeeForm.value as Employee;


  this.EmployeeService.CreateEmployee(NewEmployee).subscribe((res)=>{
    alert("Employee Created Successfully")
    this.EmployeeForm.reset();
    // this.EmployeeList.push(res)

})
}
}
