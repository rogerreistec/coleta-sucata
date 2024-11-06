import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes'; // Importa as rotas configuradas

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configuração para detecção de mudanças
    provideRouter(routes), // Configuração do roteamento
    provideClientHydration(), // Hidratação do cliente (SSR)
    provideHttpClient(withFetch()) // Configuração do cliente HTTP
  ]
};
