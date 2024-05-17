import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { entorno } from '../_entorno/entorno';

export const miguardiaGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);

  let rpta = loginService.estalogeado();

  if(!rpta){

    console.log("no esta logeado-false")
    loginService.cerrarSesion();
    return false;

  }else{
    let token  = sessionStorage.getItem(entorno.TOKEN_NAME)
    if(!jwtHelper.isTokenExpired(token)){

      console.log("no ha expirado el token")
      return true;


    }else{
      loginService.cerrarSesion();
      return false;
    }

  }
};
