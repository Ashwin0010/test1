import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

const USERS = [
  {
    name: 'Ramesh',
    email: 'ramesh.gmail.com',
    dep: 'CS',
    age: '21',
    id:'1',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: '1633804200000'
  },
  {
    name: 'Rajesh',
    email: 'Rajesh.gmail.com',
    dep: 'IT',
    age: '21',
    id:'2',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: '1604946600000'
  },
  {
    name: 'suresh',
    email: 'suresh.gmail.com',
    dep: 'IT',
    age: '23',
    id:'3',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: new Date(14/8/1995)
  },
  {
    name: 'Ram',
    email: 'ram.gmail.com',
    dep: 'ECE',
    age: '26',
    id:'4',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: new Date(7/8/1985)
  },
  {
    name: 'Ashwin',
    email: 'ashwin.gmail.com',
    dep: 'ECE',
    age: '29',
    id:'5',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: new Date(11/1/2024) 
  },
  {
    name: 'raj',
    email: 'raj.gmail.com',
    dep: 'EEE',
    age: '41',
    id:'6',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: new Date(21/6/2022)
  },
  {
    name: 'sri',
    email: 'sri.gmail.com',
    dep: 'CS',
    age: '31',
    id:'7',
    img: 'https://www.w3schools.com/w3images/tablesetting2.jpg',
    date: new Date(14/5/2023)
  }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList: any;

  userName: string = '';

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {

    

    setTimeout(() => {
      this.userList = USERS;
    },100)
  }

  details(event: any) {
    console.log(event);
    this.userName = event.name;
    // let user = JSON.stringify(event);
    // this.router.navigate(['home', user]);
    this.homeService.setUser(event);
    // this.router.navigate(['userInfo']);
  }

  search(search:any) {
    console.log(search.value);
    
  }

}
