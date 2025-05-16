import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SubjectService } from '../service/subject.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-subject',
  imports: [AdminSidebarComponent,ReactiveFormsModule,HttpClientModule],
  providers:[SubjectService],
  templateUrl: './new-subject.component.html',
  styleUrl: './new-subject.component.css'
})
export class NewSubjectComponent {


    subjectForm = new FormGroup({
      subjectName: new FormControl()
    })
    
    constructor(private subjectService:SubjectService){

    }

    saveSubject(){
      console.log(this.subjectForm.value);
      this.subjectService.addSubject(this.subjectForm.value).subscribe(response=>{
          console.log(response);
          
      },err=>{
        console.log(err);
      })

    }

    
 

}
