import { Component } from '@angular/core';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css']
})
export class PontosColetaComponent {
  onSubmit() {
    console.log("Formulário de pontos de coleta enviado!");
  }
}
