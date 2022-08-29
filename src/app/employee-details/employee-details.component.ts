import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Service/Employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers:[EmployeeService]
})
export class EmployeeDetailsComponent implements OnInit {

  dataSource:any[]=[];

  constructor(private _router:Router, private emp:EmployeeService) { }

  ngOnInit(): void {
    this.emp.getEmployeeByApi().subscribe((proddata)=>{
      this.dataSource = proddata;
  })
  }

  displayColumns:string[]=['srno','fullname','email','contactno','dob','address'];

}
