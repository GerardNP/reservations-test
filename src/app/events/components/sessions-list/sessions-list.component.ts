import { Component, Input } from '@angular/core';
import { EventDetails, SessionInfo } from '../../interfaces/events';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss'],
})
export class SessionsListComponent {

  @Input() event!: EventDetails;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.event.sessions = this.sortSessionsByDate(this.event.sessions);

    this.shoppingCartService.cart$.subscribe({
      next: (events) => {
        const indexThisEvent = events.findIndex(event => event.event.id === this.event.event.id);
        if (indexThisEvent > -1) {
          this.event = events[indexThisEvent]
        }
      }
    })
  }


  addLocation(indexSession: number, amount: number): void {
    this.shoppingCartService.addLocation(this.event, indexSession, amount);
  }

  private sortSessionsByDate(sessions: SessionInfo[]): SessionInfo[] {
    return sessions.slice().sort((a, b) => {
      const startDateA = a.date;
      const startDateB = b.date;
      return startDateA.getTime() - startDateB.getTime();
    });
  }
}
