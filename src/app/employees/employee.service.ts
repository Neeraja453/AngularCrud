import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import{HttpClient} from "@angular/common/http"
import {Observable}from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private listEmployees:Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/Mark.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/Mary.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/John.jpg'
    },
  ]
 getEmployees():Observable<Employee[]>{
  return Observable.of(this.listEmployees).delay(2000);;
 }
 save(employee:Employee){
   if(employee.id===null){
     const maxId=this.listEmployees.reduce(function(e1,e2){
      return (e1.id>e2.id) ?e1 :e2;
}).id;
employee.id = maxId + 1;
this.listEmployees.push(employee);

   }else{
    const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
    this.listEmployees[foundIndex] = employee;
   }
  
 }
 deleteEmployee(id:number){
  const i=this.listEmployees.findIndex(e=>e.id=id);
  if(i!==-1){
    this.listEmployees.splice(i,1)
  }
  }
 getEmployee(id: number): Employee {
  return this.listEmployees.find(e => e.id === id);
} 


  constructor(private httpClient:HttpClient) { }
}
