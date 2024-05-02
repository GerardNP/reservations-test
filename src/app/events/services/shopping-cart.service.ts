import { Injectable } from '@angular/core';
import { EventDetails, SessionInfo } from '../interfaces/events';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartSubject: BehaviorSubject<EventDetails[]> = new BehaviorSubject<EventDetails[]>([]);
  cart$: Observable<EventDetails[]> = this.cartSubject.asObservable();

  private keyLocalStorage = 'events-shopping';

  constructor() {
    const storedCart = localStorage.getItem(this.keyLocalStorage);
    if (storedCart) {
      this.cartSubject.next(JSON.parse(storedCart));
    }
  }

  addEventsToCart(event: EventDetails) {
    let cart: EventDetails[] = this.cartSubject.getValue();

    const indexCurrentEvent = cart.findIndex(eventCart => eventCart.event.id === event.event.id);
    if (indexCurrentEvent === -1) {
      cart = [...cart, event];
    } else {
      cart.splice(indexCurrentEvent, 1, event)
    }

    this.cartSubject.next(cart);
    this.updateStorage(cart);
  }


  private updateStorage(events: EventDetails[]): void {
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(events));
  }


  addLocation(event: EventDetails, indexSession: number, amount: number): void {

    let amountSelected = event.sessions[indexSession].amountSelected + amount;

    if (amountSelected < 0) {
      return;
    }
    if (amountSelected > event.sessions[indexSession].availability) {
      return;
    }

    event.sessions[indexSession].amountSelected = amountSelected;
    event.locationsSelected = event.sessions.reduce((a: number, b: SessionInfo) => {
      return a + b.amountSelected
    }, 0)

    this.addEventsToCart(event);
  }

}
