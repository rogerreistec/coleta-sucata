import { Component } from '@angular/core';

@Component({
  selector: 'app-gerar-alertas',
  templateUrl: './gerar-alertas.component.html',
  styleUrls: ['./gerar-alertas.component.css']
})
export class GerarAlertasComponent {
  onSubmit() {
    // Aqui você pode adicionar a lógica para enviar o alerta
    console.log("Formulário de alertas enviado!");
  }
}
