import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    
   }
   GetUsers():Observable<any[]>{
     return this.http.get<any[]>('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
   }
   GetForms():Observable<any[]>{
     return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
   }
  }