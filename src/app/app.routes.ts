import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { miguardiaGuard } from './_servicios/miguardia.guard';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"contenido",component:ContenidoComponent,
        canActivate:[miguardiaGuard]
    },
    {path:"",redirectTo:"/login",pathMatch:"full"}
];
