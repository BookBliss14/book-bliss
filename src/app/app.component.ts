import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidePanelFlag = false;

  ngOnInit(): void {
    this.location = "Pune";   //Add function to select locations
  }
  constructor(private router: Router) {

  }

  title = 'bookbliss';

  location!: string;
  homepageRenderFlag: boolean = true;

  openLoginModal() {
    this.homepageRenderFlag = false;
    this.router.navigate(['/auth/login']);
  }

  openRegisterModal() {
    this.homepageRenderFlag = false;
    this.router.navigate(['/auth']);
  }
}
