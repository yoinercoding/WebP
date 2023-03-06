import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full'},
  { path: '**', redirectTo: 'info', pathMatch: 'full'},
  { path: 'info', component: InfoComponent},
  { path: 'footer', component: FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
