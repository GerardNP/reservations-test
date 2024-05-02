import { Component, OnInit } from '@angular/core';
import { EventByList } from '../../interfaces/events';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventsList: EventByList[] = [];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents().subscribe({
      next: (events) => {
        this.eventsList = this.sortEventsByEndDate(events)
      }
    })
  }

  private sortEventsByEndDate(events: EventByList[]): EventByList[] {
    return events.slice().sort((a, b) => {
      const startDateA = new Date(parseInt(a.endDate));
      const startDateB = new Date(parseInt(b.endDate));
      return startDateA.getTime() - startDateB.getTime();
    });
  }

}
