// Este archivo es el punto de arranque de tu app Angular (donde la aplicación se inicia).

// bootstrapApplication: Es la función que inicia la aplicación Angular.
// 👉 Antes (Angular viejo) se usaba AppModule
// 👉 Ahora (Angular moderno / standalone) se usa bootstrapApplication
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

// AppComponent: Es el componente principal (la raíz de la app).
// Todo empieza desde: <app-root></app-root>
import { AppComponent } from './app/app.component';

// provideHttpClient: Esto registra HttpClient en el sistema de dependencias.
import { provideHttpClient } from '@angular/common/http';


// bootstrapApplication(AppComponent, {...}): Le dice a Angular, “Iniciá la app usando AppComponent y esta configuración”
// providers: Acá se registran servicios globales.
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    ...appConfig.providers
  ]  
})
  .catch((err) => console.error(err));
