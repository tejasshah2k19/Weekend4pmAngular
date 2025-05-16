import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {


  users:Array<any> = []
  constructor() { }
}
