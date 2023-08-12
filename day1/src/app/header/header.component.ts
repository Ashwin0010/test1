import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  routeUrl(arg:string) {
    if(arg == 'home') {
      this.homeClick();
    } else if(arg == 'about') {
      this.aboutClick()
    } else if(arg == 'location') {
      this.locationClick()
    }
  }

  homeClick() {
    this.router.navigate(['home']);
  }
  
  aboutClick() {
    this.router.navigate(['about']);
  }

  locationClick() {
    this.router.navigate(['location']);
  }

}
