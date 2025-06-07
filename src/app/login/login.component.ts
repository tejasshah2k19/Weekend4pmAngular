import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service/session.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule],
  providers: [SessionService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginText = "Login"


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private dataStoreService: DataStoreService, private toastService: ToastrService, private router: Router, private sessionService: SessionService) {
  }

  login() {


    if (!this.loginForm.valid) {
      this.toastService.error("Please Fill All the form Data", "", { timeOut: 3000 })
      return;
    }

    this.loginText = "Authenticating...."

    this.sessionService.authenticate(this.loginForm.value).subscribe(resp => {
      console.log(resp);

      this.loginText = "Login"
      if (resp.user.role == 'admin') {
        this.toastService.success("Login success", "", { timeOut: 3000 })
      } else if (resp.user.role == 'faculty') {
        this.toastService.success("Login success", "", { timeOut: 3000 })
        this.router.navigateByUrl("/home")
      } else {
        this.toastService.error("Unauthorize Request Please Contact Admin", "", { timeOut: 3000 })

      }
    }, err => {
      
      this.loginText = "Login"
      this.toastService.error("Invalid Credentials", "", { timeOut: 3000 })
    })


  }//login 


}


//ts
//js
