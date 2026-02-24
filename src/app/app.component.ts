import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
//import { HijoComponent } from "./padre/hijo/hijo.component";
//import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";
import { ViewChildComponent } from "./view-child/view-child.component"; 
import { MensajeService } from './mensaje.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolacionComponent, PadreComponent, /*HijoComponent, */ MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent, ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Servicios en Angular';

  mensaje: string;

  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
