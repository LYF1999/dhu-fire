import { PrincipalService } from './principal.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class RouterAccessService implements CanActivate {

  constructor(
    private router: Router,
    private principal: PrincipalService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.principal.user !== undefined) {
        resolve(true);
      } else {
        // this.router.navigateByUrl('/');
        resolve(true);
      }
    });
  }
}
