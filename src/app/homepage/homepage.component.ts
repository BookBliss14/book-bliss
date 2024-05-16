import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchString: [null, [Validators.required]]
    })
  }
  search() {
    console.log(this.searchForm.value);
    
  }

  buyBook() {
    this.router.navigate(['/content/buy']);
  }

  sellBook() {
    this.router.navigate(['/content/sell']);
  }
}
