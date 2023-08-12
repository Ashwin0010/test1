import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

const USERS = [
  {
    name: 'Ramesh',
    email: 'ramesh.gmail.com',
    dep: 'CS',
    age: '21',
    id:'1'
  },
  {
    name: 'Rajesh',
    email: 'Rajesh.gmail.com',
    dep: 'IT',
    age: '21',
    id:'2'
  },
  {
    name: 'suresh',
    email: 'suresh.gmail.com',
    dep: 'IT',
    age: '23',
    id:'3'
  },
  {
    name: 'Ram',
    email: 'ram.gmail.com',
    dep: 'ECE',
    age: '26',
    id:'4'
  },
  {
    name: 'Ashwin',
    email: 'ashwin.gmail.com',
    dep: 'ECE',
    age: '29',
    id:'5'
  },
  {
    name: 'raj',
    email: 'raj.gmail.com',
    dep: 'EEE',
    age: '41',
    id:'6'
  },
  {
    name: 'sri',
    email: 'sri.gmail.com',
    dep: 'CS',
    age: '31',
    id:'7'
  }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList: any;

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.userList = USERS;
    },10000)
  }

  details(event: any) {
    console.log(event);
    // let user = JSON.stringify(event);
    // this.router.navigate(['home', user]);
    this.homeService.setUser(event);
    this.router.navigate(['userInfo']);
  }

}
