import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {
  registroForm: FormGroup;
  listaClientes: any[] = []; // Aquí guardaremos los datos

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]] 
    });
  }

  enviarFormulario() {
    if (this.registroForm.valid) {
      // Guardamos una copia de los datos en la lista
      this.listaClientes.push(this.registroForm.value);
      // Limpiamos el formulario
      this.registroForm.reset();
    }
  }
}