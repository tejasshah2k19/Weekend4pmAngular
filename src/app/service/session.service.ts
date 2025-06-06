import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }


  authenticate(data:any):Observable<any>{
    return this.httpClient.post(environment.apiBaseUrl+"api/auth/login",data)
  }
}
