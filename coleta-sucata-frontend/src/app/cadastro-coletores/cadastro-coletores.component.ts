import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-coletores',
  templateUrl: './cadastro-coletores.component.html',
  styleUrls: ['./cadastro-coletores.component.css']
})
export class CadastroColetoresComponent {
  onSubmit() {
    console.log("Formulário de cadastro de coletores enviado!");
  }
}
