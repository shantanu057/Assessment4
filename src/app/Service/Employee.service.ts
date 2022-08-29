import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable()

export class EmployeeService{
    employeeURL:string="/api/employee";

    constructor(private _HttpClient:HttpClient){}

    getEmployeeByApi():Observable<any[]>{
        return this._HttpClient.get<any[]>(this.employeeURL);
    }
}