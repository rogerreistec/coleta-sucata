import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Adicione ReactiveFormsModule diretamente aqui

@Component({
  selector: 'app-cadastro-coletores',
  standalone: true,
  templateUrl: './cadastro-coletores.component.html',
  styleUrls: ['./cadastro-coletores.component.css'],
  imports: [ReactiveFormsModule]  // Aqui, importamos ReactiveFormsModule diretamente
})
export class CadastroColetoresComponent {
  coletorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.coletorForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.coletorForm.valid) {
      console.log(this.coletorForm.value);
      this.coletorForm.reset();
    }
  }
}
