import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  // Declara una propiedad llamada mensajePadre de tipo string, inicializada
  mensajePadre: string = 'Hola desde el Padre';


  mensaje: string = '';
  // Se emitió un str, es lo que recibimos 
  recibirNotificacion(mensajeHijo: string) {
    this.mensaje = mensajeHijo;
  }

  @ViewChild(HijoComponent) componenteHijo!: HijoComponent; 
 
  cambiarMensajeHijo() { 
    this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el Componente Padre'); 
  }   

}
