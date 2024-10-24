import { Routes } from '@angular/router';
import { CadastroColetoresComponent } from './cadastro-coletores/cadastro-coletores.component';
import { CadastroPontosColetaComponent } from './cadastro-pontos-coleta/cadastro-pontos-coleta.component';
import { CadastroAlertasComponent } from './cadastro-alertas/cadastro-alertas.component';

export const routes: Routes = [
  { path: 'cadastro-coletores', component: CadastroColetoresComponent },
  { path: 'cadastro-pontos-coleta', component: CadastroPontosColetaComponent },
  { path: 'cadastro-alertas', component: CadastroAlertasComponent },
  { path: '', redirectTo: '/cadastro-coletores', pathMatch: 'full' }
];
