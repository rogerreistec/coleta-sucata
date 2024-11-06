import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrl = 'http://localhost:3000/api'; // URL da API

  constructor(private http: HttpClient) { }

  // Método para obter dados (se necessário)
  getDados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dados`); // URL para obter dados, verifique se esta rota existe
  }

  // Método para cadastrar coletor
  cadastrarColetor(data: { nome: string; telefone: string; email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/coletores`, data); // URL para cadastrar coletor
  }

  // Método para cadastrar ponto de coleta
  cadastrarPontoColeta(data: { nome: string; endereco: string; telefone: string; email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/pontos-coleta`, data); // URL para cadastrar ponto de coleta
  }

  // Método para gerar alertas
  gerarAlerta(data: { mensagem: string; tipo: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/alertas`, data); // URL para gerar alerta
  }
}
