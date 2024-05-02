import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { EventByList, EventDetails, EventDetailsDTO } from '../interfaces/events';
import { Observable, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EventsMapper } from '../mappers/events.mapper';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private request: RequestService,
  ) { }

  getEvents(): Observable<EventByList[]> {
    const useMock: boolean = environment.useMock ?? false;

    return this.request.get<EventByList[]>('', '', useMock, 'events/events.json');
  }

  getEvent(idEvent: number): Observable<EventDetails> {
    const useMock: boolean = environment.useMock ?? false;

    if (!useMock) {
      return this.request.get<EventDetails>('', '');
    }

    const idsMocked: number[] = [68, 184];
    if (idsMocked.includes(idEvent)) {
      return this.request.get<EventDetailsDTO>('', { idEvent }, useMock, `events/event-info-${idEvent}.json`).pipe(
        map(dto => EventsMapper.toEventDetails(dto))
      );

    } else {
      return throwError(() => 'EVENT INFO NOT FOUND');
    }
  }
}
