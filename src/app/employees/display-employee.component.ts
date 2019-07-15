import { Component, OnInit,Input,  EventEmitter, Output } from '@angular/core';

import { Employee } from '../Models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  
 @Input() employee:Employee;
 @Input() searchTerm: string;
 @Output()  notify : EventEmitter<Employee> = new EventEmitter<Employee>();
 @Output() notifyDelete:EventEmitter<number> = new EventEmitter<number>();
 confirmDelete=false;
 
  private selectedEmloyeeId: number;

  constructor(private _route:ActivatedRoute,private _router: Router,private _employeeService:EmployeeService) { }

  ngOnInit() {
  this.selectedEmloyeeId = + this._route.snapshot.paramMap.get("id");
  }
  handleClcik(){
   this.notify.emit(this.employee);
 }
 viewEmployee(){
  this._router.navigate(['/employees', this.employee.id], {
    queryParams: { 'searchTerm': this.searchTerm }
  });
 }

 editEmployee(){
  this._router.navigate(['/edit', this.employee.id], {
   
  });
 }
 deleteEmployee(){
  this._employeeService.deleteEmployee(this.employee.id);
  this.notifyDelete.emit(this.employee.id);
 }
  

}
