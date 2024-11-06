import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColetaSucataService } from './services/coleta-sucata.service'; // Corrigido para o serviço correto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coleta-sucata-frontend';
  dados: any[] = [];

  constructor(private coletaSucataService: ColetaSucataService) {} // Corrigido para o serviço correto

  ngOnInit(): void {
    this.coletaSucataService.getColetores().subscribe((dados: any) => { // Corrigido o método e o tipo de dados
      this.dados = dados;
    });
  }
}
