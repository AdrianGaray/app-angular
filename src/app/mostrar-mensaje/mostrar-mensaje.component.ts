import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  // Event Binding
  mensaje: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.mensaje = this.route.snapshot.queryParams['mensaje'];
  }

  mostrarMensaje(): void {
    this.mensaje = '¡Hola, has hecho clic en el botón!';
  }

  resetearMensaje(): void {
    // Reiniciamos el valor de la variable 
    this.mensaje = '';
  }
}
