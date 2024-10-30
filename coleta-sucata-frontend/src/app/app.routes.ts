import { Routes } from '@angular/router';
import { CadastroColetoresComponent } from './cadastro-coletores/cadastro-coletores.component';
import { PontosColetaComponent } from './pontos-coleta/pontos-coleta.component';
import { GerarAlertasComponent } from './alertas/gerar-alertas/gerar-alertas.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-coletores', component: CadastroColetoresComponent },
  { path: 'pontos-coleta', component: PontosColetaComponent },
  { path: 'alertas', component: GerarAlertasComponent },
];
