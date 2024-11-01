// src/app/services/dados.service.ts
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private apiUrl = 'http://localhost:3000/api/dados';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}