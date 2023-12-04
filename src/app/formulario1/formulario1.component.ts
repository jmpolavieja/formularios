import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component {
// Vamos a crear un formulario reactivo con formBuilder
form = this.fb.group({
  nombre: ['',[ Validators.required, Validators.minLength(3)]],
  apellidos: ['', [Validators.required, Validators.maxLength(15)]],
  codigoPostal: ['', [Validators.required, Validators.maxLength(5)]],
  email: ['', [Validators.required, Validators.email]]
})

constructor(private fb:FormBuilder){}

enviar() {
  console.log(this.form.value);
}

}
