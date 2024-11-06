import { Component } from '@angular/core';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css'],
  standalone: true
})
export class PontosColetaComponent {
  onSubmit(event: Event) {
    event.preventDefault(); // Evita o recarregamento da página
    const form = event.target as HTMLFormElement;

    const nomeLocal = (form.elements.namedItem('nomeLocal') as HTMLInputElement).value;
    const endereco = (form.elements.namedItem('endereco') as HTMLInputElement).value;
    const telefone = (form.elements.namedItem('telefone') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    console.log('Nome do Local:', nomeLocal);
    console.log('Endereço:', endereco);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    // Processar os dados conforme necessário
  }
}
