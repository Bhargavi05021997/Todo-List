import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-materialdemo',
  templateUrl: './materialdemo.component.html',
  styleUrls: ['./materialdemo.component.css']
})
export class MaterialdemoComponent implements OnInit {

  Notifications:string[] = ['Missed call From Manager','Facebook Updated','Os Updated'];
  isVisible:boolean = false;
  buttontext:string = 'show';

   title:string = 'shoppingcartstatus';
  NotificationMap:any = {
    '=0':'No Notifications',
    '=1':'One Notification',
    'other':'#Notification'
  }
  cities:string[] = [
    'Delhi',
    'Banglore',
    'Hyd',
    'Chennai',
    'Mumbai',
    'Goa'
  ];
  constructor() { }

  ngOnInit():void {

  }

  ToggleDetails(){
    this.isVisible = (this.isVisible==false)?true:false;
    this.buttontext = (this.buttontext=='Show')?'Hide':'Show'
  }
}
