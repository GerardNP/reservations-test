import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'eventos', pathMatch: 'full' },
  {
    path: 'eventos',
    title: 'Eventos',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  { path: '**', redirectTo: 'eventos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
