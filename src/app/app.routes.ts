import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './padre/hijo/hijo.component';


// Routes → tipo de dato que define las rutas de la app
// Estás creando un arreglo de rutas (routes)
// Cada objeto { path, component } es una regla
export const routes: Routes = [
    // Significa:
    // 👉 Cuando la URL sea: http://localhost:4200/
    // Angular debe mostrar: ListadoUsuariosComponent
    // path: '' = ruta raíz (home).
    // 👉 Cuando la URL sea: /
    // Angular debe cargar: ListadoUsuariosComponent
    {path:'', component: ListadoUsuariosComponent}, //localhost:4200/
    {path:'mostrar-mensaje', component: MostrarMensajeComponent},
    {
        path:'configuracion', children: [
            {path: 'padre', component: PadreComponent}, //localhost:4200/configuracion/padre
            {path: 'hijo', component: HijoComponent} //localhost:4200/configuracion/hijo
        ]
    }
];
