import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Curso FullStack";
  usuarios = [
    { username: "usuario01", name: "nombre01", email: "correo1@abc.com" },
    { username: "usuario02", name: "nombre02", email: "correo2@abc.com" },
    { username: "usuario03", name: "nombre03", email: "correo3@abc.com" }
  ]

  desactivado: boolean = true;

  agregarUsuario() {
    this.usuarios.push({ username: "user", name: "Leonel", email: "leonel@abc.com" })
  }

  eliminarUsuario(indice: number) {
    this.usuarios.splice(indice, 1);
  }
}
