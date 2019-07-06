import { Component, OnInit, Output } from '@angular/core';
import { Inovela } from '../modelos/inovela';
import { NovelaService } from '../servicios/novela.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  novela: Inovela = {};
  servicio: NovelaService;

  constructor(ns: NovelaService) { 
    this.servicio = ns;
  }

ngOnInit() {
}

grabar() {
  console.log(this.novela);
  this.servicio.novelas.push(this.novela);
}

}
