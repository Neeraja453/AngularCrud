import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEmployeeComponent } from './employees/create-employee.component';

@Injectable({
  providedIn: 'root'
})

export class CreateEmployeeCanDeactivateGaurdServiceGuard
    implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   if (component.createEmployeeForm.dirty) {
  //     return confirm('Are you sure you want to discard your changes?');
  // }

  return true;
  }

    constructor() { }

  
}
