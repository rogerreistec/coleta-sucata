import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColetaSucataService {
  private baseUrl = 'http://localhost:3000/api';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // --- Coletores ---

  // Método para obter todos os coletores
  getColetores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/coletores`);
  }

  // Método para adicionar um novo coletor
  addColetor(coletorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/coletores`, coletorData, { headers: this.headers });
  }

  // --- Pontos de Coleta ---

  // Método para obter todos os pontos de coleta
  getPontosColeta(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pontos-coleta`);
  }

  // Método para adicionar um novo ponto de coleta
  addPontoColeta(pontoColetaData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pontos-coleta`, pontoColetaData, { headers: this.headers });
  }

  // --- Alertas ---

  // Método para obter todos os alertas
  getAlertas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alertas`);
  }

  // Método para adicionar um novo alerta
  addAlerta(alertaData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/alertas`, alertaData, { headers: this.headers });
  }
}
