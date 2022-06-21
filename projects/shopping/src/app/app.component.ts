import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  list:any[] = [];
  


  addTask(item:string){
    this.list.push({name:item})
  }
  deleteTask(i:any){
    this.list.splice(i,1)
  }
}