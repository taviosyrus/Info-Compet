import { Component, OnInit } from '@angular/core';
import { User } from './../User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  //Property for the gender
  private gender: string[];
  //Property for the user
  private user:User;

  ngOnInit() {

    this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({email:"", password: { pwd: "" , confirmPwd: ""}, gender: this.gender[0], terms: false});
  }

   onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    	this.user = value;
    	console.log( this.user);
    	console.log("valid: " + valid);
  	}

}
