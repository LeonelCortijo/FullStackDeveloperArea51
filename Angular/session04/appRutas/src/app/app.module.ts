import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';

import { Routes, RouterModule } from '@angular/router';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component'
import { NuevoComponent } from './nuevo/nuevo.component';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'curso',
    children: [
      {
        path: '',
        component: ListadoComponent
      },
      {
        path: 'nuevo',
        component: NuevoComponent
      },
      {
        path: 'edicion/:id',
        component: EdicionComponent
      }
    ]
  },
  {
    path: '**',
    component: NoEncontradoComponent
    //redirectTo: EdicionComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EdicionComponent,
    NuevoComponent,
    NoEncontradoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
