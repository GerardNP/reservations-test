import { Component, Input } from '@angular/core';
import { EventByList } from '../../interfaces/events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

  @Input() event!: EventByList;

  constructor(
    private router: Router
  ) { }

  goToDetails(): void {
    this.router.navigate(['eventos', 'evento-detalles', this.event.id])
  }

}
