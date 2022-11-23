import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild('formElement')
  signupForm: NgForm;
  defaultSubscription:string= 'advanced';
  user={
    mail:'',
    subscription:'',
    password:''
  }
  submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    this.user.mail = this.signupForm.value.mail;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }

}
