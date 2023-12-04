import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit{

  form2 = this.fb.group({
    asignatura: [''],
    curso: [''],
    matriculados: [0]
  });

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.form2.patchValue({curso: 'CSI-2'});
    this.form2.controls['asignatura'].setValue('DWC');

  }

  enviar() {
    console.log(this.form2.value);
  }
}
