import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  usenamePlaceholder: string = 'Username';
  passwordPlaceholder: string = 'Password';
  @Output() showSignUp = new EventEmitter<boolean>();
  @ViewChild('password', { static: false }) password!: ElementRef;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }

  showSecret(selector: string): void {
    if (this.password.nativeElement.type === "text") {
      this.password.nativeElement.type = "password"
    } else {
      this.password.nativeElement.type = "text"
    }
  }

  onSubmit(): void { }
}
