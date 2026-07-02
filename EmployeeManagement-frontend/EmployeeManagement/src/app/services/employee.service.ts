import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

private ApiUrl ="http://localhost:8082/api/Emp"



constructor(private http:HttpClient){}


CreateEmployee(newEmp : Employee):Observable<Employee>{
  return this.http.post<Employee>(`${this.ApiUrl}/save`,newEmp);
}

GetEmployee():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.ApiUrl+"/get")
}

UpdateEmployee(empid : number,emp:Employee):Observable<Employee>{
  return this.http.put<Employee>(this.ApiUrl+"/update/"+empid,emp);
}
// `${this.apiUrl}/save`


deleteEmployee(empid : number){
  return this.http.delete(this.ApiUrl+"/delete/"+empid);
}

countEmployees():Observable<number>{
  return this.http.get<number>(this.ApiUrl+"/count");
}
}
