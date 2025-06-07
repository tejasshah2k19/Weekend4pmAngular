import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  

  signupForm = new FormGroup({
      firstName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
  })
 
   //firstName
    //email 
    //password 
    constructor(private dataStoreService:DataStoreService){

    }
    signup(){
      console.log(this.signupForm.value)//
      console.log(this.signupForm.valid)
      this.dataStoreService.users.push(this.signupForm.value);

      console.log(this.dataStoreService.users);
    }

}
