import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarAlertasComponent } from './gerar-alertas.component';

describe('GerarAlertasComponent', () => {
  let component: GerarAlertasComponent;
  let fixture: ComponentFixture<GerarAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerarAlertasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
