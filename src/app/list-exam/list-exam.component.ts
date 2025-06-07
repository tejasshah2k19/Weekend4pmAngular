import { Component } from '@angular/core';
import { ExamService } from '../service/exam.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewSubjectComponent } from "../new-subject/new-subject.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-exam',
  imports: [NgFor, HttpClientModule, NewSubjectComponent,RouterLink],
  providers:[ExamService],
  templateUrl: './list-exam.component.html',
  styleUrl: './list-exam.component.css'
})
export class ListExamComponent {

  exams:Array<any> = [] 
  constructor(private examService:ExamService){
    this.examService.getAllExams().subscribe(resp=>{
      this.exams = resp;
    })
  }
}
