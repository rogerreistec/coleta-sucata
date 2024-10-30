import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColetorService {
  private coletoresSource = new BehaviorSubject<any[]>([]);
  coletores$ = this.coletoresSource.asObservable();

  constructor() {}

  updateColetores(newColetores: any[]) {
    this.coletoresSource.next(newColetores);
  }
}
