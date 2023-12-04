import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha-user',
  templateUrl: './ficha-user.component.html',
  styleUrls: ['./ficha-user.component.css']
})
export class FichaUserComponent {

  fUser = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    apellidos: ['', Validators.required],
    email: ['', Validators.email],
    dni: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder){}

  enviar() {
    alert(this.fUser.controls['nombre'].value);
    this.fUser.reset();
  }
}
