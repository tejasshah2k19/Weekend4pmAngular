import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../service/exam.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { TopicService } from '../service/topic.service';
import { SubjectService } from '../service/subject.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-exam',
  imports: [HttpClientModule, ReactiveFormsModule, NgFor,NgIf],
  providers: [ExamService, UserService, SubjectService, TopicService, ToastrService],
  templateUrl: './edit-exam.component.html',
  styleUrl: './edit-exam.component.css'
})
export class EditExamComponent {




  faculty: Array<any> = []
  subject: Array<any> = []
  topic: Array<any> = []
  topicsFilter: Array<any> = []

  examForm!: FormGroup 


  constructor(private route: ActivatedRoute, private examService: ExamService, private subjectService: SubjectService, private topicService: TopicService, private userService: UserService, private t: ToastrService, private router: Router) {
    console.log(route.snapshot.params["examId"]);
    this.examService.getExamById(route.snapshot.params["examId"]).subscribe(resp => {

      this.examForm = new FormGroup({
        title: new FormControl(resp.title,),
        description: new FormControl(resp.description,),
        facultyId: new FormControl('',),
        subjectId: new FormControl('',),
        topicId: new FormControl('',),
        marksPerQuestion: new FormControl(resp.marksPerQuestion,),
        totalNumberOfQuestions: new FormControl(resp.totalNumberOfQuestions,),
        active: new FormControl(resp.active,),
        negative: new FormControl(resp.negative,)

      });
    }, err => {
      console.log(err);

    })

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

  setTopic(subjectId: any) {

    this.topicsFilter = this.topic.filter(t => t.subject._id == subjectId)
  }

updateExam() {
    this.examService.updateExam(this.examForm.value,this.route.snapshot.params["examId"]).subscribe(resp => {
      this.t.success("Exam Created Successfully", "", { timeOut: 3000 })
      this.router.navigateByUrl("/listexams")
    }, err => {
      this.t.error("Error in Creating Exam" + err.error.message, "", { timeOut: 3000 })


    })
  }
}
