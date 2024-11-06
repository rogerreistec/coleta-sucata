import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColetaSucataService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // --- Coletores ---
  getColetores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/coletores`);
  }

  addColetor(coletorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/coletores`, coletorData);
  }

  // --- Pontos de Coleta ---
  getPontosColeta(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pontos-coleta`);
  }

  addPontoColeta(pontoColetaData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pontos-coleta`, pontoColetaData);
  }

  // --- Alertas ---
  getAlertas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alertas`);
  }

  addAlerta(alertaData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/alertas`, alertaData);
  }
}
