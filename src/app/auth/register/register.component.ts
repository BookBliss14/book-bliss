import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      education: [null, [Validators.required]],
      college: [null, [Validators.required]],
      password: [null, [Validators.required]],
      passwordAgain: [null, [Validators.required]]
    })
  }

  register() {

  }

  close() {

  }
  
  navigateToLogin() {

  }
}
