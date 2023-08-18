import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    age:[''],
    email: ['',[Validators.email]],
    phoneNos: this.fb.array([])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.userForm);
    
  }

  get getPhoneNo(): FormArray  {
    return this.userForm.get('phoneNos') as FormArray;
  }

  addNewPhoneNo() {
    return this.fb.group({
      phoneNo: ''
    })
  }

  submit() {
    console.log(this.userForm);
  }
}
