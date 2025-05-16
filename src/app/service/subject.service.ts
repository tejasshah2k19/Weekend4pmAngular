import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient: HttpClient) { }


  addSubject(data: any): Observable<any> {
    return this.httpClient.post("https://exam2k24-2.onrender.com/api/subjects", data)
  }

  getAllSubjects(): Observable<any> {
    return this.httpClient.get("https://exam2k24-2.onrender.com/api/subjects")
  }

  getSubjectById(subjectId: any): Observable<any> {
    return this.httpClient.get("https://exam2k24-2.onrender.com/api/subjects/" + subjectId)
  }
}
