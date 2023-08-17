import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    age:[''],
    email: ['',[Validators.email]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.userForm);
    
  }


  submit() {
    console.log(this.userForm);
  }
}
