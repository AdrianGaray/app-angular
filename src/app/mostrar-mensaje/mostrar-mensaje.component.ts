import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  // Event Binding
  mensaje: string = '';

  mostrarMensaje(): void {
    this.mensaje = '¡Hola, has hecho clic en el botón!';
  }

  resetearMensaje(): void {
    // Reiniciamos el valor de la variable 
    this.mensaje = '';
  }
}
