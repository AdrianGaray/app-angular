import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // Input para declarar una propiedad que recibirá el valor desde el componente padre. 
  //  mensaje es una propiedad de entrada (@Input) de tipo string y es obligatoria (!) en un componente Angular.
  // ! (Definitivamente asignado) indica que la variable será inicializada antes de usarse.
  // ! evita errores de inicialización, asegurando que el valor se asignará en tiempo de ejecución
  // !: operador non-null assertion
  // confie que esta propiedad va a ser inicializada posteriormente
  // Se inicializa desde el componente Padre 
  @Input() mensaje!: string; 

  // Notificar al componente Padre. se usa para enviar eventos al componente padre
  // 1. @Output() → Decorador de Angular que indica que la propiedad notificarPadre es un evento que el padre puede escuchar.
  // 2. notificarPadre → Es una instancia de EventEmitter<string>, que permite emitir eventos con un valor de tipo string.
  // 3. new EventEmitter<string>() → Crea un emisor de eventos que enviará datos de tipo string al componente padre cuando se active.
  @Output() notificarPadre = new EventEmitter<string>();

  // 1. enviarMensaje() → Método que se ejecutará cuando el hijo quiera comunicarse con el padre.
  // 2. Llama a .emit() en notificarPadre, lo que dispara un evento.
  // 3. El evento envía el mensaje "Mensaje desde el Componente Hijo al Padre".
  // 4. El componente padre recibirá este mensaje si está escuchando el evento.
  enviarMensaje() { 
    // Emitir el evento con un mensaje (se emite un str) 
    this.notificarPadre.emit('Mensaje desde el Componente Hijo al Padre'); 
  } 


  // Uso de @ViewChild 
  mensajeViewChild : string = 'Mensaje desde el componente hijo'; 

  cambiarMensaje(nuevoMensaje: string) { 
    this.mensajeViewChild = nuevoMensaje; 
  }  

}
