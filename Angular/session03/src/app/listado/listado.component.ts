import { Component, OnInit, Input } from '@angular/core';
import { Novela } from '../modelos/novela';
import { Inovela } from '../modelos/inovela';
import { NovelaService } from '../servicios/novela.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  /*
  inovelas: Array<Inovela> = [
    {
      titulo: "El Perfume",
      descripcion: "Historia de un asesino que mata mujeres para extraer sus escencia y crear perfumes",
      autor: "Patrick Suskind",
      anno: 1990
    },
    {
      titulo: "Jason y los argonautas",
      descripcion: "Narra la historia del viaje de Jason para obtener el vellocino de oro",
      autor: "Herodoto",
      anno: 1950
    },
    {
      titulo: "El caballero carmelo",
      descripcion: "Cuenta la historia de un gallo viejo que se ve forzado a luchar con el 'Aji seco'",
      autor: "Abraham Valdelomar",
      anno: 1910
    }
  ]

  novelas: Array<Novela> = [
    new Novela("El Perfume",
      "Historia de un asesino que mata mujeres para extraer sus escencia y crear perfumes",
      "Patrick Suskind",
      1990),
    new Novela("Jason y los argonautas",
      "Narra la historia del viaje de Jason para obtener el vellocino de oro",
      "Herodoto",
      1950),
    new Novela("El caballero carmelo",
      "Cuenta la historia de un gallo viejo que se ve forzado a luchar con el 'Aji seco'",
      "Abraham Valdelomar",
      1910)

  ]
  */

  snovelas: Array<Inovela>;
  constructor(ns: NovelaService) { 
    this.snovelas = ns.novelas;
  }

  ngOnInit() {
  }

  intro(texto: string): string {
    return texto.substring(0, 50);
  }

}
