import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'evento-detalles/:idEvent', component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
