import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  Categories:string[] = [];
  UserId:string = '';
  constructor(private data:DataService,private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.data.GetCategories().subscribe(category=>this.Categories = category);
    this.UserId = this.cookie.get('UserId');
  }
 Signout(){
   this.cookie.delete('UserId');
   this.router.navigate(['/login']);
 }
}
