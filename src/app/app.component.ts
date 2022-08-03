import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public userlist:any =[
    {userId:1, username:"shashi", age:28},
    {userId:2, username:"Abi", age:30},
    {userId:3, username:"shiva reddy", age:49},
    {userId:4, username:"hari", age:40},
  ]
}
