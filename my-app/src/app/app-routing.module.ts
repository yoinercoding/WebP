import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path: 'nav', component: NavComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'nav'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
