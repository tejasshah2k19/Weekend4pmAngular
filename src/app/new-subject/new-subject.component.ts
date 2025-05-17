import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SubjectService } from '../service/subject.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-subject',
  imports: [AdminSidebarComponent, ReactiveFormsModule, HttpClientModule],
  providers: [SubjectService],
  templateUrl: './new-subject.component.html',
  styleUrl: './new-subject.component.css'
})
export class NewSubjectComponent {


  subjectForm = new FormGroup({
    subjectName: new FormControl()
  })

  constructor(private subjectService: SubjectService, private toasterService: ToastrService,private router:Router) {

  }

  saveSubject() {
    console.log(this.subjectForm.value);
    this.subjectService.addSubject(this.subjectForm.value).subscribe(response => {
      console.log(response);
      this.toasterService.success("Subject addedd successfuly", "", { timeOut: 3000 })
      this.router.navigateByUrl("/listsubjects")


    }, err => {
      // console.log(err);
      // console.log(err.error);
      
      // console.log(err.error.message);
      // console.log(typeof(err.error.message));


      if (err.error.message.includes("duplicate key")) {
        this.toasterService.error("Subject Already Present", "", { timeOut: 3000 })
      } else {
        this.toasterService.error("Subject Not addedd : " + err.error.message, "", { timeOut: 3000 })
      }
    })

  }




}
