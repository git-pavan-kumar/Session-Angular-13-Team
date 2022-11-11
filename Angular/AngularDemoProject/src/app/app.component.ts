import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'THBS';
  name:string = "Welcome to A13 Application";

  clickMessage:string = "Status of training";

  onClickHandler = (num:number) => {
    console.log("Event fired in A13", num);
    this.clickMessage = "Training is up -->";
  };
}
