import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioNuevoComponent } from './componentes/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id', component: UsuarioComponent,
      children: [
        { path: 'nuevo', component: UsuarioNuevoComponent },
        { path: 'editar', component: UsuarioEditarComponent },
        { path: 'detalle', component: UsuarioDetalleComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
      ] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
