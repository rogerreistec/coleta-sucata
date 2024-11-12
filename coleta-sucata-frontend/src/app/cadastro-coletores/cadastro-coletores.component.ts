import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ColetaSucataService } from '../services/coleta-sucata.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-coletores',
  templateUrl: './cadastro-coletores.component.html',
  styleUrls: ['./cadastro-coletores.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class CadastroColetoresComponent implements AfterViewInit {
  @ViewChild('nome') nomeInput!: ElementRef;
  @ViewChild('telefone') telefoneInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;

  constructor(private coletaSucataService: ColetaSucataService) {}

  // Garante que os elementos estão prontos
  ngAfterViewInit() {
    if (!this.nomeInput || !this.telefoneInput || !this.emailInput) {
      console.error('Erro ao acessar os campos do formulário');
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const novoColetor = {
      nome: this.nomeInput.nativeElement.value,
      telefone: this.telefoneInput.nativeElement.value,
      email: this.emailInput.nativeElement.value
    };

    // Verifica se todos os campos foram preenchidos
    if (!novoColetor.nome || !novoColetor.telefone || !novoColetor.email) {
      console.error('Preencha todos os campos!');
      return;
    }

    // Chamada ao serviço para adicionar o coletor
    this.coletaSucataService.addColetor(novoColetor).subscribe({
      next: (response) => {
        console.log('Coletor cadastrado com sucesso!', response);
        this.resetForm();
      },
      error: (err) => console.error('Erro ao cadastrar coletor:', err)
    });
  }

  resetForm() {
    this.nomeInput.nativeElement.value = '';
    this.telefoneInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
  }
}
