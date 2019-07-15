import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  employees : Employee[] ;
  filteredEmployees:Employee[];
  dataFromChild: Employee;
 private _searchTerm:string;
 get searchTerm():string{
   return this._searchTerm;
   

 }
 
 set searchTerm(value: string) {
  this._searchTerm = value;
  console.log("this._searchTerm",this._searchTerm)
  this.filteredEmployees = this.filterEmployees(value);
  console.log("this.filteredEmployees ",this.filteredEmployees )
}
constructor(private _employeeService: EmployeeService,
  private _router: Router,
  private _route: ActivatedRoute) {
    this.employees=this._route.snapshot.data['employeeList'];
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredEmployees = this.employees;
    }
   }
  
  ngOnInit() {   
  }
  onDeleteNotification(id:number){
    const i=this.filteredEmployees.findIndex(e=>e.id=id);
    if(i!==-1){
      this.filteredEmployees.splice(i,1)
    }
      }
  filterEmployees(searchString: string) {
    console.log("searchString",searchString)
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
     
  }
  handleNotify(eventdata:Employee){
this.dataFromChild=eventdata;
  }
  onClick(employeeId:number){

    this._router.navigate(['employees', employeeId], {
      queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue' }
    });
  }



}

