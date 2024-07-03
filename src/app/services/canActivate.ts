import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private currentUser: LoginService) {}



    getToken() {
        return this.currentUser.getToken();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.getToken() !== null) {
            return true;
        }
        this.router.navigate(['/pages']);
        return false;
    }
}
