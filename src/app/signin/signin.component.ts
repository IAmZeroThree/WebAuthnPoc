import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonFunctionsService } from '../common/common-functions.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signUpForm!: FormGroup;
  usenamePlaceholder: string = 'Username';
  passwordPlaceholder: string = 'Password';
  adharPlaceholder: string = 'Adhar Number';
  confirmPasswordPlaceholder: string = 'Confirm Password';
  @Output() showSignUp = new EventEmitter<boolean>();
  @ViewChild('adhar', { static: false }) adhar!: ElementRef;
  @ViewChild('password', { static: false }) password!: ElementRef;
  @ViewChild('confirmPassword', { static: false }) confirmPassword!: ElementRef;  

  constructor(private fb: FormBuilder, public commonFunctions: CommonFunctionsService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      adhar: [null, [Validators.required]],
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPasssword: ["", [Validators.required]]
    })
    
  }

  showSecret(selector: string): void {
    switch (selector) { 
      case "adhar":
        if (this.adhar.nativeElement.type === "text") {
          this.adhar.nativeElement.type = "password"
        } else {
          this.adhar.nativeElement.type = "text"
        }
        break;
      case "password":
        if (this.password.nativeElement.type === "text") {
          this.password.nativeElement.type = "password"
        } else {
          this.password.nativeElement.type = "text"
        }
        break;
      case "confirmPassword":
        if (this.confirmPassword.nativeElement.type === "text") {
          this.confirmPassword.nativeElement.type = "password"
        } else {
          this.confirmPassword.nativeElement.type = "text"
        }
        break;
      default:
        break;
    }
      
  }

  onSubmit(): void { }
}
