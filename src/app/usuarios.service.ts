// Es service real de Angular que consume una API

// Es el servicio de Angular para hacer llamadas HTTP (GET, POST, PUT, DELETE, etc.).
// Ejemplos: Consumir APIs - Enviar datos al backend - Obtener listas / usuarios / productos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Angular usa RxJS → programación reactiva.
// Un Observable:
// * Es un stream de datos
// * Puede emitir valores en el tiempo
// * Necesita subscribe() para ejecutarse
// Importante: HttpClient NO ejecuta la llamada hasta que alguien se subscribe.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // API pública de prueba → devuelve usuarios JSON.
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Constructor con DI (inyección de dependencias)
  // Angular inyecta automáticamente HttpClient.
  constructor(private http: HttpClient) { }

  // Hace un GET HTTP y devuelve un Observable.
  obtenerDatos(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

// Observable, es un tipo de dato de RxJS que representa:
// * Un flujo de datos que se van a emitir en el tiempo.

// En el caso de HttpClient, el Observable:
// * Hace la petición HTTP
// * Espera la respuesta
// * Emite los datos
// * Se completa
// Pero  no se ejecuta hasta que alguien hace subscribe().


// <any>: Esto es el tipo de dato que va a emitir el Observable.
// * Significa: Este observable va a devolver cualquier tipo de dato

// any en TypeScript significa:
// * No hay tipado estricto
// * Puede ser cualquier cosa
// * No hay validación de estructura
// Es válido para pruebas, pero no es lo ideal.

}
