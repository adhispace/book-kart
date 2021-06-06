import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { searchBooks, addBookToCart } from '../store/BookActions';
import { getBookList$, getBooksInCart$ } from '../store/BookSelectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$;
  booksInCart$;
  searchBookURL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(public http: HttpClient, public store$: Store, public router: Router) {}

  ngOnInit(): void {
    this.bookList$ = this.store$.select(getBookList$);
    this.booksInCart$ = this.store$.select(getBooksInCart$);
  }

  numSequence(n = 0, isRating: string) {
    const roundedNo = isRating === 'rating' ? Math.round(n) : 5 - Math.round(n);
    return Array(roundedNo);
  }

  addToCart(book) {
  this.store$.dispatch(addBookToCart(book));
  }
}
