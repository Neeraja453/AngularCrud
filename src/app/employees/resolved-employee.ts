import { Employee } from '../Models/employee';

export class ResolvedEmployee {
    constructor(public employeeList:Employee[],public error:any=null){

    }
}
