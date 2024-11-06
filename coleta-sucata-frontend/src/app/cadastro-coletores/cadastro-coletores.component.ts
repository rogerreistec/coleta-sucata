import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-coletores',
  templateUrl: './cadastro-coletores.component.html',
  styleUrls: ['./cadastro-coletores.component.css']
})
export class CadastroColetoresComponent {
  nome: string = '';
  telefone: string = '';
  email: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const novoColetor = {
      nome: this.nome,
      telefone: this.telefone,
      email: this.email
    };

    this.http.post('http://localhost:3000/api/coletores', novoColetor).subscribe(
      response => {
        console.log("Coletor cadastrado com sucesso!", response);
        // Limpar os campos do formulário ou fazer outra ação
        this.resetForm();
      },
      error => {
        console.error("Erro ao cadastrar coletor:", error);
      }
    );
  }

  resetForm() {
    this.nome = '';
    this.telefone = '';
    this.email = '';
  }
}
