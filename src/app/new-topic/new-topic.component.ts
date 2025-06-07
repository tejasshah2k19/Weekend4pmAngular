import { Component, NgModule } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SubjectService } from '../service/subject.service';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { TopicService } from '../service/topic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-topic',
  imports: [AdminSidebarComponent, ReactiveFormsModule, HttpClientModule, NgFor],
  providers: [SubjectService, TopicService],
  templateUrl: './new-topic.component.html',
  styleUrl: './new-topic.component.css'
})
export class NewTopicComponent {



  topicForm = new FormGroup({
    subject: new FormControl(),
    topicName: new FormControl()
  })

  allSubjects: Array<any> = []
  constructor(private subjectService: SubjectService, private topicService: TopicService,private toastrService:ToastrService) {
    subjectService.getAllSubjects().subscribe(resp => {
      this.allSubjects = resp;
    })
  }

  saveTopic() {
    console.log(this.topicForm.value)
    this.topicService.saveTopic(this.topicForm.value).subscribe(resp => {
      this.toastrService.success("Topic added ","",{timeOut:3000})
    }, err => {
      console.log(err)
      this.toastrService.error(err.error.message,"ERROR",{timeOut:3000})
    })
  }
}
