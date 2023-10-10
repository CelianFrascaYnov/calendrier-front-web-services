import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from './components/calendrier/calendrier.component';

const routes: Routes = [
  { path: '', component: CalendrierComponent },
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
