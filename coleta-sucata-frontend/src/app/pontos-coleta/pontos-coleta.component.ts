import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css']
})
export class PontosColetaComponent implements AfterViewInit {
  
  // Usando ViewChild para pegar o formulário
  @ViewChild('form') formElement!: ElementRef;

  // Método que é chamado após a view ser inicializada
  ngAfterViewInit() {
    // Verificando se o ViewChild foi inicializado corretamente
    if (this.formElement) {
      console.log('Form element foi encontrado:', this.formElement.nativeElement);
    } else {
      console.error('Form element não foi encontrado!');
    }
  }

  // Método de submit do formulário
  onSubmit() {
    // Acessando o nativeElement do formulário no método onSubmit
    if (this.formElement) {
      console.log('Form element no onSubmit:', this.formElement.nativeElement);
      // Aqui você pode acessar o formulário e fazer qualquer ação necessária
    } else {
      console.error('Form element não encontrado no submit!');
    }
  }
}
