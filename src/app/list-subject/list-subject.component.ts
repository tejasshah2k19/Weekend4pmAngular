import { Component } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-subject',
  imports: [HttpClientModule,NgFor],
  providers: [SubjectService],
  templateUrl: './list-subject.component.html',
  styleUrl: './list-subject.component.css'
})
export class ListSubjectComponent {

  data:Array<any> = []

  constructor(private subjectService: SubjectService) {
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

}
