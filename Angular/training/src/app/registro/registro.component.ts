import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Input() ver = {};

  @Output() onRegistro = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.ver = {login: true, registro: false, olvido: false}

    this.onRegistro.emit(this.ver);
    
  }

}
