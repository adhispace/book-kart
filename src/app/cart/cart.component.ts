import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBooksInCart$ } from '../store/BookSelectors';
import { tap } from 'rxjs/operators';
import { deleteBookFromCart } from '../store/BookActions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  booksInCart$;

  constructor(public store$: Store) { }

  ngOnInit(): void {
    this.booksInCart$ = this.store$.select(getBooksInCart$).pipe(tap(data => {
      console.log(data);
    }));
  }

  numSequence(n = 0, isRating: string) {
    const roundedNo = isRating === 'rating' ? Math.round(n) : 5 - Math.round(n);
    return Array(roundedNo);
  }

  deleteFromCart(book) {
    this.store$.dispatch(deleteBookFromCart(book));
  }

}
