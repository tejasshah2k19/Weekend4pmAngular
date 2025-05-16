import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  name = "royal"//value ->data type->String 
  name2: String = "royal";//data  type String 


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('')
  })

  constructor(private dataStoreService: DataStoreService,private toastService:ToastrService,private router:Router) {
    this.name2 = "ahmedabad";
  }

  login() {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);

    let found = false;
    for (let i = 0; i < this.dataStoreService.users.length; i++) {
      if (this.dataStoreService.users[i].email == this.loginForm.value.email
        &&
        this.dataStoreService.users[i].password == this.loginForm.value.password
      ) {
          found  = true;
          break;
      }
    }

    if(found == true){
      //success
      this.toastService.success("Login success","",{timeOut:3000})
      this.router.navigateByUrl("home")
      
    }else{

      this.toastService.error("Invalid Credentials","",{timeOut:3000})
    }


  }


}


//ts
//js
