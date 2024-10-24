import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPontosColetaComponent } from './cadastro-pontos-coleta.component';

describe('CadastroPontosColetaComponent', () => {
  let component: CadastroPontosColetaComponent;
  let fixture: ComponentFixture<CadastroPontosColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPontosColetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPontosColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
