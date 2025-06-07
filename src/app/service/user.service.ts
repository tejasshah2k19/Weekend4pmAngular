import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  getAllFaculty():Observable<any>{
      return this.httpClient.get("https://exam2k24-2.onrender.com/api/users/faculty")
  }
}
