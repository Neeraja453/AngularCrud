import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Models/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/ngx-bootstrap-datepicker';
import { Employee } from '../Models/employee';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // @ViewChild('employeeForm') public createEmployeeForm: NgForm;
 
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  panelTitle:string;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: "",
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' },
  ];

 
  constructor(private _employeeService: EmployeeService,
    private _router: Router, private _route:ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',

        dateInputFormat: 'DD/MM/YYYY'
      })
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
    this._route.paramMap.subscribe(paramMap =>{const id =  + paramMap.get('id');
              this.getEmployee(id);
  })
  }
  private  getEmployee(id:number){
if(id===0){

  this.employee={
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: "",
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null
  }
  this.panelTitle="create Employee";
}
else {
  this.panelTitle="Edit Employee";
  this.employee =Object.assign({}, this._employeeService.getEmployee(id));
}
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list'])
  }
  

}
