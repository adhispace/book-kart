import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBooksInFav$ } from '../store/BookSelectors';
import { tap } from 'rxjs/operators';
import { deleteBookFromFav } from '../store/BookActions';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  booksInFav$;

  constructor(public store$: Store) { }

  ngOnInit(): void {
    this.booksInFav$ = this.store$.select(getBooksInFav$).pipe(tap(data => {
      console.log(data);
    }));
  }

  numSequence(n = 0, isRating: string) {
    const roundedNo = isRating === 'rating' ? Math.round(n) : 5 - Math.round(n);
    return Array(roundedNo);
  }

  deleteFromFav(book) {
    this.store$.dispatch(deleteBookFromFav(book));
  }

}
