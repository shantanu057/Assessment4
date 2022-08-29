import {InMemoryDbService} from 'angular-in-memory-web-api';

export class empDataService implements InMemoryDbService{

    constructor(){}   
 
    createDb() {
       return {
        employee:[
            {srno:"1",fullname:"Mark Peter", email:"mark@gmail.com", contactno:"6542342", dob:"04-01-2001", address:"UK"},
            {srno:"2",fullname:"Harry Potter", email:"harry@gmail.com", contactno:"5432342", dob:"02-07-2000", address:"US"},
            {srno:"3",fullname:"David Guetta", email:"david@gmail.com", contactno:"7632342", dob:"07-10-2002", address:"Africa"},
            {srno:"4",fullname:"Rihana", email:"rihana@gmail.com", contactno:"7565342", dob:"12-03-2000", address:"Australia"},
            {srno:"5",fullname:"Taylor Swift", email:"taylor@gmail.com", contactno:"76554342", dob:"23-09-2000", address:"Europe"},
        ]
    };

}
}