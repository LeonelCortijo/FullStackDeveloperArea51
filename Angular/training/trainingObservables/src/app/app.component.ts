import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainingObservables';
  cursosAbiertos: iCursos[] = [];
  cursosProximos: iCursos[] = [];
  lista: iCursos[] = [];

  dataCargada: boolean = false;

  ngOnInit() {
    const obs: Observable<Array<{}>> = Observable.create(
      (observador: Observer<Array<{}>>) => {

        setTimeout(() => {
          observador.next([
            { curso: "Angular", estado: 1 },
            { curso: "Microservicios", estado: 2 },
            { curso: "Angular devops", estado: 2 }
          ])
        }, 2000);

        setTimeout(() => {
          observador.next([
            { curso: "Testing Angular", estado: 2 }
          ])
        }, 4000);

        setTimeout(() => {
          observador.next([
            { curso: "Aplicando Cucumber a Angular", estado: 2 },
            { curso: "NodeJs", estado: 1 },
            { curso: "Escalando Mongo", estado: 2 },
            { curso: "MongoDB", estado: 1 }
          ])
        }, 6000);

        setTimeout(() => {
          observador.complete();
        }, 7000);
      }
    )
    obs
      .pipe(
        retry(3),
        map(el => {
          const transformado = el.map((item: any) => {
            item.curso = item.curso.toUpperCase();
            return item;
          })
          return transformado;
        })
      )

      .subscribe(
        (data: iCursos[]) => {
          const abiertos = data.filter((item: any) => item.estado == 1)
          this.cursosAbiertos = [...this.cursosAbiertos, ...abiertos]
          console.log("Cursos abiertos: ", this.cursosAbiertos);
          const proximos = data.filter((item: any) => item.estado == 2)
          this.cursosProximos = [...this.cursosProximos, ...proximos]
          console.log("Cursos próximos: ", this.cursosProximos);
        },
        null,
        () => {
          this.dataCargada = true
          console.log("Data cargada")
        }
      )
  }

  listado(estado: number) {
    this.lista = estado == 1 ? this.cursosAbiertos : this.cursosProximos;
  }
}

export interface iCursos {
  curso: string,
  estado: number
}
