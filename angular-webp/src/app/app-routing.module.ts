import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'info', component: InfoComponent},
  { path: 'tecnologias', component: TecnologiasComponent},
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }