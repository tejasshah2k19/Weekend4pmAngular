import { Component } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-subject',
  imports: [HttpClientModule,NgFor],
  providers: [SubjectService],
  templateUrl: './list-subject.component.html',
  styleUrl: './list-subject.component.css'
})
export class ListSubjectComponent {

  data:Array<any> = []

  constructor(private subjectService: SubjectService,private toastrService:ToastrService) {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe(resp => {
      console.log(resp);
      this.data = resp  
    }, err => {
      console.log(err);
    })
  }

  deleteSubject(id:any){
 
    //api 
    this.subjectService.deleteBySubjectId(id).subscribe(resp=>{
      this.toastrService.success("Subject Delete Successfully","",{timeOut:3000})
      this.getAllSubjects();
    },err=>{

      this.toastrService.error("Error in  Deleting subject"+err.error.message,"",{timeOut:3000})
    })

  }

}
