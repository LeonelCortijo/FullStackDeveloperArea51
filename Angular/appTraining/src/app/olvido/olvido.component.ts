import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./olvido.component.css']
})
export class OlvidoComponent implements OnInit {

  @Input() ver = {};

  @Output() onLogin = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.ver = {login: true, registro: false, olvido: false}

    this.onLogin.emit(this.ver);
    
  }

}
