import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  form3 = this.formBuilder.group({
    modelo: ['', Validators.required],
    marca: ['', Validators.required],
    fecha: [0, Validators.required],
    color: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder){}

  enviar() {
    console.log(this.form3.valid);
  }
}
