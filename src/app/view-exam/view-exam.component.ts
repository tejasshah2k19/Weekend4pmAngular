import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ExamService } from '../service/exam.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-exam',
  imports: [HttpClientModule],
  providers: [ExamService],
  templateUrl: './view-exam.component.html',
  styleUrl: './view-exam.component.css'
})
export class ViewExamComponent {

  exam: any
  constructor(private route: ActivatedRoute, private examService: ExamService) {
    let examId = this.route.snapshot.params["examId"]

    this.examService.getExamById(examId).subscribe(resp => {
      this.exam = resp;
      console.log(this.exam);
      
    })
  }
}
