import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() ver = {};

  @Output() onLogin = new EventEmitter<Object>();

  @Output() onOlvido = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  registro(){
    this.ver = {login: false, registro: true, olvido: false}

    this.onLogin.emit(this.ver);
    
  }

  olvido(){
    this.ver = {login: false, registro: false, olvido: true}

    this.onOlvido.emit(this.ver);
    
  }

}
