import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventsRoutingModule } from './events-routing.module';
import { HeaderService } from '../shared/services/header.service';
import { SessionsListComponent } from './components/sessions-list/sessions-list.component';



@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    ShoppingCartComponent,
    EventCardComponent,
    ShoppingCartComponent,
    SessionsListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
  ],
  providers: [
    DatePipe
  ]
})
export class EventsModule {

  constructor(private headerService: HeaderService) {
    this.headerService.setTitle('EVENTOS')
  }
}
