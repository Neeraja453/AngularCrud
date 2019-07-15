import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateEmployeeCanDeactivateGaurdServiceGuard } from './create-employee-can-deactivate-gaurd-service.guard';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';

const AppRoutes: Routes = [
  {path:'list',component:ListEmployeesComponent,
     resolve:{employeeList:EmployeeListResolverService}
},
{path:'NotFound',component:PageNotFoundComponent},
  {path:'employees/:id',component:EmployeeDetailsComponent,
     canActivate:[EmployeeDetailsGuardService]    
 },
  {path:'edit/:id',component:CreateEmployeeComponent,canDeactivate: [CreateEmployeeCanDeactivateGaurdServiceGuard]},
  { path:'', redirectTo:"/list", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes),
    BsDatepickerModule.forRoot(),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
