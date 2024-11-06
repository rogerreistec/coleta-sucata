import { Component, ViewChild, ElementRef } from '@angular/core';
import { ColetaSucataService } from '../services/coleta-sucata.service';

@Component({
  selector: 'app-cadastro-coletores',
  templateUrl: './cadastro-coletores.component.html',
  styleUrls: ['./cadastro-coletores.component.css'],
  standalone: true
})
export class CadastroColetoresComponent {
  @ViewChild('nome') nomeInput!: ElementRef;
  @ViewChild('telefone') telefoneInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('endereco') enderecoInput!: ElementRef;

  constructor(private coletaSucataService: ColetaSucataService) {}

  onSubmit(event: Event) {
    event.preventDefault();

    const novoColetor = {
      nome: this.nomeInput.nativeElement.value,
      telefone: this.telefoneInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
      endereco: this.enderecoInput.nativeElement.value,
    };

    // Chamada ao serviço para adicionar o coletor
    this.coletaSucataService.addColetor(novoColetor).subscribe(
      response => {
        console.log("Coletor cadastrado com sucesso!", response);
        this.resetForm();
      },
      error => {
        console.error("Erro ao cadastrar coletor:", error);
      }
    );
  }

  resetForm() {
    this.nomeInput.nativeElement.value = '';
    this.telefoneInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.enderecoInput.nativeElement.value = '';
  }
}

