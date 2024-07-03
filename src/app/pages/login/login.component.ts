import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private router: Router,private service: LoginService) {
    }
    login() {
        this.service.login();
        this.router.navigate(['/hub']);
    }
}
