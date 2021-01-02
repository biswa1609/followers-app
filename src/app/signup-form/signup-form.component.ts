import { SignupService } from './signup.service';
import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray } from '@angular/forms';
import { SignupValidator } from './validates-signup';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  constructor(signupService:SignupService)
  {
    this.signup=signupService
  }
  signup;
  form = new FormGroup({
    account: new FormGroup({
      accountnumber:new FormControl('',Validators.required)
     // email:new FormControl('',Validators.required)
    }),
    username:new FormControl('',
    [
      Validators.required,
      Validators.minLength(4)
    ],
    SignupValidator.alreadyTaken),
    password:new FormControl('',
    [
      Validators.required,
      SignupValidator.checkSpaces 
    ]),
    modules:new FormArray([])
  });
  get accountnumber()
  {
    return this.form.get('account.accountnumber');
  }
  onChange()
  {
   // console.log(this.form.get('username'))
  }
  get username()
  {
    return this.form.get('username');
  }get password()
  {
    return this.form.get('password');
  }
  login(f)
  {
    let obj = new SignupService();
    let isValid = obj.isValidUser(this.username.value,this.password.value);
    if(!isValid)
      this.form.setErrors({
        invalidLogin:true
      })
      console.log(f);
  }
  get modules()
  {
    return this.form.get('modules') as FormArray
  }
  addModules(topic:HTMLInputElement)
  {
      this.modules.push(new FormControl(topic.value));
      topic.value="";
  }
  removeTopic(topic:FormControl)
  {
    var index = this.modules.controls.indexOf(topic.value);
    this.modules.removeAt(index);
  }
}
