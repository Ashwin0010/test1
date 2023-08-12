import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @Input() clguser!: any;

  @Output() viewDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  getDetails(user:any) {
    console.log(user);
   this.viewDetails.emit(user);
  }

}
