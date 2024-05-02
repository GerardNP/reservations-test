import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { EventDetails } from '../../interfaces/events';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  eventsSelected: EventDetails[] = []

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.shoppingCartService.cart$.subscribe({
      next: events => {
        this.eventsSelected = events;
      }
    })
  }

  deleteOneLocation(indexEvent: number, indexSession: number): void {
    this.shoppingCartService.addLocation(this.eventsSelected[indexEvent], indexSession, -1);
  }

}
