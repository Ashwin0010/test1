import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private homeService: HomeService) { 
  }

  user1: any;

  ngOnInit(): void {

    this.user1 = this.homeService.getUser();
    // this.route.params.subscribe((data:any) => {
     
    //   this.user1 = JSON.parse(data.id);

      
    // })
    
  }

}
