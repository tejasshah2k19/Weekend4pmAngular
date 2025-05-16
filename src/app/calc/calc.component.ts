import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  n1: string = ""
  n2: string = ""
  ans: string = ""
  n1Error = ""
  n2Error = "" 

  constructor(private toastr: ToastrService) {}

  addition() {
    var isError = false;
    if (this.n1.trim().length == 0) {
      isError = true;
      this.n1Error = "Please Enter No.1"
    }else{
      this.n1Error = ""
    }

    if (this.n2.trim().length == 0) {
      isError = true;
      this.n2Error = "Please Enter No.2"
    }else{
      this.n2Error = ""    
    }

    if (isError) {
      this.toastr.error("Please Provide all details","ERROR",{timeOut:3000})
    } else {
      this.ans = parseInt(this.n1) + parseInt(this.n2) + "";
    }
  }

}
