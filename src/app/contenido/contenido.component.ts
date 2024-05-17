import { Component } from '@angular/core';
import { ContenidoService } from '../_servicios/contenido.service';
import { JwtAuthenticationResponse } from '../_modelo/JwtAuthenticationResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { entorno } from '../_entorno/entorno';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  contenido:string = "";
  usuario:string = "";

  constructor(private servicio:ContenidoService,
    public jwtHelper: JwtHelperService

  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const token = sessionStorage.getItem(entorno.TOKEN_NAME)
    let tokenDecodificado = token!==null?this.jwtHelper.decodeToken(token):null;
    this.usuario = tokenDecodificado.sub;


    this.servicio.obtenerContenido().subscribe(
      data => {this.contenido = data.contenido}
    )
  }
}
