
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {


  @Input() clguser!: any;

  @Output() viewDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  getDetails(user:any) {
    // console.log(event);
    // console.log(event.target);
   this.viewDetails.emit(user);
  }

  returnNewVar() {
    return 'variables'
  }

}
