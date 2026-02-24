import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIfComponent {
  isAutenticado: boolean = false; 

  alternarAutenticacion(): void { 
    this.isAutenticado = !this.isAutenticado; 
    }   

    
}
