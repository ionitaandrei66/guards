import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   user:{username:string, pass: string} | null = null;
  constructor() { }

  login(){
    this.user = {username: 'Sushi',pass: 'Sushi12345'}
  }

  getToken() {
    return this.user;
  }
}
