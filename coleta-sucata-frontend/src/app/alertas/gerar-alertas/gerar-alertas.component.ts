import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ColetaSucataService } from '../../services/coleta-sucata.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gerar-alertas',
  templateUrl: './gerar-alertas.component.html',
  styleUrls: ['./gerar-alertas.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class GerarAlertasComponent implements AfterViewInit {
  @ViewChild('alertaTipo', { static: false }) alertaTipoInput!: ElementRef;
  @ViewChild('alertaDescricao', { static: false }) alertaDescricaoInput!: ElementRef;

  constructor(private coletaSucataService: ColetaSucataService) {}

  // Garante que os elementos estão prontos
  ngAfterViewInit() {
    if (!this.alertaTipoInput || !this.alertaDescricaoInput) {
      console.error('Erro ao acessar os campos do formulário');
    } else {
      console.log('Campos do formulário acessados com sucesso!');
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const novoAlerta = {
      tipo: this.alertaTipoInput.nativeElement.value,
      descricao: this.alertaDescricaoInput.nativeElement.value
    };

    // Verifica se todos os campos foram preenchidos
    if (!novoAlerta.tipo || !novoAlerta.descricao) {
      console.error('Preencha todos os campos!');
      return;
    }

    // Chamada ao serviço para gerar o alerta
    this.coletaSucataService.addAlerta(novoAlerta).subscribe({
      next: (response) => {
        console.log('Alerta gerado com sucesso!', response);
        this.resetForm();
      },
      error: (err) => console.error('Erro ao gerar alerta:', err)
    });
  }

  resetForm() {
    this.alertaTipoInput.nativeElement.value = '';
    this.alertaDescricaoInput.nativeElement.value = '';
  }
}
