import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { SubjectService } from '../service/subject.service';
import { TopicService } from '../service/topic.service';
import { UserService } from '../service/user.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExamService } from '../service/exam.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-exam',
  imports: [AdminSidebarComponent, NgFor, HttpClientModule, ReactiveFormsModule],
  providers: [SubjectService, TopicService, UserService, ExamService],
  templateUrl: './new-exam.component.html',
  styleUrl: './new-exam.component.css'
})
export class NewExamComponent {

  faculty: Array<any> = []
  subject: Array<any> = []
  topic: Array<any> = []
  topicsFilter:Array<any>=[]

  examForm = new FormGroup({
    title: new FormControl('',),
    description: new FormControl('',),
    facultyId: new FormControl('',),
    subjectId: new FormControl('',),
    topicId: new FormControl('',),
    marksPerQuestion: new FormControl('',),
    totalNumberOfQuestions: new FormControl('',),
    active: new FormControl('true',),
    negative: new FormControl('true',)

  });


  constructor(private subjectService: SubjectService, private topicService: TopicService, private userService: UserService, private examService: ExamService, private t: ToastrService,private router:Router) {
    this.subjectService.getAllSubjects().subscribe(resp => {
      this.subject = resp;
    })

    this.topicService.getAllTopics().subscribe(resp => {
      this.topic = resp;//subjectId:1 , topicId:1,topic:Filter 
    })

    this.userService.getAllFaculty().subscribe(resp => {
      this.faculty = resp;
    })

  }

  setTopic(subjectId:any) {
   
   this.topicsFilter = this.topic.filter(t=>t.subject._id == subjectId)
  }

  saveExam() {
    this.examService.addExam(this.examForm.value).subscribe(resp => {
      this.t.success("Exam Created Successfully", "", { timeOut: 3000 })
      this.router.navigateByUrl("/listexams")
    }, err => {
      this.t.error("Error in Creating Exam" + err.error.message, "", { timeOut: 3000 })


    })
  }

}
