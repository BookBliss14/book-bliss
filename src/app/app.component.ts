import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.location = "Pune";   //Add function to select locations
  }
  constructor() {}
  title = 'bookbliss';

  location!: string;
  homepageRenderFlag: boolean = true;

  openLoginModal() {
    console.log("Hi");
    
  }

  openRegisterModal() {

  }
}
