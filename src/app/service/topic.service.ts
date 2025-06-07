import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient:HttpClient) { }

  saveTopic(data:any):Observable<any>{
    return this.httpClient.post("https://exam2k24-2.onrender.com/api/topics",data);
  }

  getAllTopics():Observable<any>{
    return this.httpClient.get("https://exam2k24-2.onrender.com/api/topics")
  }
}
