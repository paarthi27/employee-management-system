import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
 
  

  constructor(private router:Router){}

  loginInfo:Auth={
UserName :'',
Password  :'',

  }

loginButton(){
console.log(this.loginInfo);

  if(this.loginInfo.UserName === 'Admin' && this.loginInfo.Password === 'password'){

    alert("login successful");

this.router.navigate(['/dashboard']);
  }
else
{
  alert("invalid credential")
} 


  

}


}

