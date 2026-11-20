import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; 


import { RegistroComponent } from './registro'; 

describe('RegistroComponent', () => {
  let component: RegistroComponent; 
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [RegistroComponent, ReactiveFormsModule], 
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('debe invalidar el formulario si el correo no tiene formato de email', () => {
  component.registroForm.setValue({
    nombre: 'Lucero',
    correo: 'hola',
    telefono: '987654321'
  });

  expect(component.registroForm.invalid).toBe(true);
});

it('debe invalidar el formulario si el teléfono tiene menos de 9 dígitos', () => {
  component.registroForm.setValue({
    nombre: 'Lucero',
    correo: 'lucero@gmail.com',
    telefono: '123'
  });

  expect(component.registroForm.invalid).toBe(true);
});

it('debe invalidar el formulario si el nombre tiene menos de 3 letras', () => {
  component.registroForm.setValue({
    nombre: 'Lu',
    correo: 'lucero@gmail.com',
    telefono: '987654321'
  });

  expect(component.registroForm.invalid).toBe(true);
});

});