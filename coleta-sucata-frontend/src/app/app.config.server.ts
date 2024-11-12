import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Configuração para renderização no lado do servidor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
