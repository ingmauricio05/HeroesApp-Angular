import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authServices:AuthService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authServices.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  if(!estaAutenticado){
                    this.router.navigate(['./auth/login']);
                  }
                })
              );

    /*if(this.authServices.auth.id){
        return true;
      }

    return false;*/
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServices.verificaAutenticacion()
            .pipe(
              tap( estaAutenticado => {
                if(!estaAutenticado){
                  this.router.navigate(['./auth/login']);
                }
              })
            );
    /*  if(this.authServices.auth.id){
        return true;
      }

    return false;*/
  }
}