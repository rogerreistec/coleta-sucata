import { Component } from '@angular/core';
import { ColetaSucataService } from '../services/coleta-sucata.service';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css'],
  standalone: true
})
export class PontosColetaComponent {
  constructor(private coletaSucataService: ColetaSucataService) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Evita o recarregamento da página
    const form = event.target as HTMLFormElement;

    const nomeLocal = (form.elements.namedItem('nomeLocal') as HTMLInputElement).value;
    const endereco = (form.elements.namedItem('endereco') as HTMLInputElement).value;
    const telefone = (form.elements.namedItem('telefone') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    const pontoColetaData = {
      nomeLocal,
      endereco,
      telefone,
      email
    };

    // Chamada ao serviço para adicionar o ponto de coleta
    this.coletaSucataService.addPontoColeta(pontoColetaData).subscribe(
      response => {
        console.log('Ponto de Coleta cadastrado com sucesso!', response);
      },
      error => {
        console.error('Erro ao cadastrar ponto de coleta:', error);
      }
    );
  }
}
