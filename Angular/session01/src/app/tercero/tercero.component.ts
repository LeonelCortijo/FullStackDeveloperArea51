import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {

  nombre: string = "Leonel";

  constructor() { }

  ngOnInit() {
  }

  captura(nombreIngresado) {
    this.nombre = nombreIngresado;
    console.log(this.nombre)
  }

}
