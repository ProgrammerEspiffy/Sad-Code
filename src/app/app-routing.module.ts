import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch:'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'eventos', component: EventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
