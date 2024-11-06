import { Component } from '@angular/core';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-gerar-alertas',
  templateUrl: './gerar-alertas.component.html',
  styleUrls: ['./gerar-alertas.component.css']
})
export class GerarAlertasComponent {
  constructor(private dadosService: DadosService) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const form = event.target as HTMLFormElement;
    const liberado = (form.elements.namedItem('liberado') as HTMLInputElement).value;
    const aguardando = (form.elements.namedItem('aguardando') as HTMLInputElement).value;

    // Criação do objeto de alerta com as propriedades corretas
    const alerta = {
      mensagem: `${liberado} e ${aguardando}`, // Combine ou ajuste conforme sua necessidade
      tipo: 'informativo' // Ou o tipo que você precisa
    };

    // Chamada ao serviço para enviar o alerta
    this.dadosService.gerarAlerta(alerta).subscribe(
      response => {
        console.log('Alerta gerado com sucesso:', response);
      },
      error => {
        console.error('Erro ao gerar alerta:', error);
        alert('Erro ao gerar alerta: ' + (error.error?.message || error.message || 'Erro desconhecido'));
      }
    );
  }
}
