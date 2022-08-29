import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  personForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.personForm=this.fb.group({
      FirstName:['',Validators.required],
      MiddleName:[''],
      LastName:['',Validators.required],
      EmailId:['',Validators.required],
      Contactno:['',[Validators.required,Validators.maxLength(10)]],
      Address:['',Validators.required],
      Pincode:['',[Validators.required,Validators.maxLength(6)]],
    })
  }
  emptype: any[] = [
    {value: 'Permanent', viewValue: 'Permanent'},
    {value: 'Contract', viewValue: 'Contract'},
  ];

  emailCheck(control:AbstractControl):{[key:string]:any}|null {
    
    const email:string= control.value;
    const domain=email.substring(0,email.lastIndexOf('@'));
    
    if(domain.toLowerCase()==='gmail')
    {
      return null;
    }

    else{
      return {'emailmismatch':true}
    }
  }

}
