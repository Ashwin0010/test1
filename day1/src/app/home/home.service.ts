import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
    console.log('sddssd');
    
   }

   user: any

   setUser(user:any) {
    this.user = user;
   }

   getUser() {
    return this.user
   }
}
