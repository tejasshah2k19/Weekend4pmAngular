import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient:HttpClient) { }

  addExam(data:any):Observable<any>{
    return this.httpClient.post(environment.apiBaseUrl+"api/exams",data)
  }

  getAllExams():Observable<any>{
    return this.httpClient.get(environment.apiBaseUrl+"api/exams")
  }

  getExamById(examId:any):Observable<any>{
    return this.httpClient.get(environment.apiBaseUrl+"api/exams/"+examId)
  }
  
  updateExam(data:any,examId:any):Observable<any>{
    return this.httpClient.put(environment.apiBaseUrl+"api/exams/"+examId,data)
  }

}
