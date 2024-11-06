import { Component } from '@angular/core';
import { ColetaSucataService } from '../../services/coleta-sucata.service';

@Component({
  selector: 'app-gerar-alertas',
  templateUrl: './gerar-alertas.component.html',
  styleUrls: ['./gerar-alertas.component.css'],
  standalone: true
})
export class GerarAlertasComponent {
  constructor(private coletaSucataService: ColetaSucataService) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const form = event.target as HTMLFormElement;
    const liberado = (form.elements.namedItem('liberado') as HTMLInputElement).value;
    const aguardando = (form.elements.namedItem('aguardando') as HTMLInputElement).value;

    const alertaData = {
      mensagem: `${liberado} e ${aguardando}`, // Combine ou ajuste conforme sua necessidade
      tipo: 'informativo' // Ou o tipo que você precisa
    };

    // Chamada ao serviço para gerar o alerta
    this.coletaSucataService.addAlerta(alertaData).subscribe(
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
