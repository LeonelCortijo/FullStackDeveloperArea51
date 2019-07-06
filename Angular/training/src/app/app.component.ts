import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ver = {
    login: true,
    registro: false,
    olvido: false
  };

  change(show: any) {
    this.ver = show;
    console.log(show);

  }

}
