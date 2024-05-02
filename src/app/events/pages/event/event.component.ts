import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { EventDetails } from '../../interfaces/events';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() idEvent: string = '';
  event$: Observable<EventDetails> = of();
  errorMessage: string = '';

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getSessions();
    this.event$ = this.eventsService.getEvent(parseInt(this.idEvent)).pipe(
      catchError(error => {
        this.errorMessage = error;
        return of();
      })
    );

    // this.event$ = this.eventsService.getEventData().pipe(
    //   catchError(error => {
    //     this.errorMessage = error;
    //     return of(null); // Devolvemos un observable con un valor nulo para que el template no intente acceder a un valor indefinido
    //   })
    // );
  }

  getSessions(): void {
    // this.eventsService.getEvent(parseInt(this.idEvent)).subscribe({
    //   next: (eventDetails) => {
    //     this.event = eventDetails;
    //   }
    // })
  }

  goToEventsList(): void {
    this.router.navigate(['eventos'])
  }
}
