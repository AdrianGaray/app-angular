// Esta clase puede ser inyectada como dependencia.
// Es decir, otros componentes o servicios pueden usar este service.
import { Injectable } from '@angular/core';

// Esto registra el servicio en el contenedor de dependencias de Angular (DI).
@Injectable({
  // providedIn: 'root' significa:
  // * El servicio es singleton (una sola instancia en toda la app)
  // * Está disponible en toda la aplicación
  // * No hace falta agregarlo en providers[] del AppModule
  // * Es la forma moderna de registrar servicios.
  providedIn: 'root'
})

// Define el servicio llamado MensajeService.
export class MensajeService {

  private mensaje: string = 'Hola desde el servicio de Mensajes';

  // El constructor se ejecuta cuando Angular crea el servicio.
  constructor() { }

    obtenerMensaje(): string{
    return this.mensaje;
  }
}
