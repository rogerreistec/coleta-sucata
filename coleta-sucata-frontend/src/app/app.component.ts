import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosService } from './services/dados.service';

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

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.dadosService.getDados().subscribe((dados) => {
      this.dados = dados;
    });
  }
}