import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  list:any[] = [];
  Users:any[] = [];
 
  addTask(item:string){
    this.list.push({name: item});
  }
  deleteTask(i:any){
    this.list.splice(i,1)
  }
  
constructor(private data:UserService){}
ngOnInit():void{
    this.data.GetUsers().subscribe(user=>this.Users=user);
  }
}