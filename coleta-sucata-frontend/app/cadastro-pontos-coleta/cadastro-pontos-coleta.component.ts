import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pontos-coleta',
  standalone: true, // Importante para componentes independentes
  imports: [CommonModule, ReactiveFormsModule], // Adiciona o CommonModule e ReactiveFormsModule
  templateUrl: './cadastro-pontos-coleta.component.html',
  styleUrls: ['./cadastro-pontos-coleta.component.css']
})
export class CadastroPontosColetaComponent {
  pontoColetaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pontoColetaForm = this.fb.group({
      nomeEmpresa: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.pontoColetaForm.valid) {
      console.log('Dados do formulário:', this.pontoColetaForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
