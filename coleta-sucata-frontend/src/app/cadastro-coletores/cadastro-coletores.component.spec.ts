import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroColetoresComponent } from './cadastro-coletores.component';

describe('CadastroColetoresComponent', () => {
  let component: CadastroColetoresComponent;
  let fixture: ComponentFixture<CadastroColetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroColetoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroColetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
