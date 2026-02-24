import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {

    // Es un array vacío que va a guardar los datos de la API.
    usuarios: any[] = [];

    // Constructor con inyección de dependencias
    // Angular le inyecta automáticamente el servicio. Gracias a: @Injectable({ providedIn: 'root' })
    constructor(private usuariosServices: UsuariosService){}

    // Se ejecuta cuando el componente:
    // * Ya fue creado
    // * Está listo
    // * Se va a mostrar en pantalla
    ngOnInit(){
      // subscribe() ejecuta la petición HTTP
      this.usuariosServices.obtenerDatos().subscribe((datos)=> {
        this.usuarios = datos;
      });
  }

}
