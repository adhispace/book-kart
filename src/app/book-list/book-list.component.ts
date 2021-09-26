import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { searchBooks, addBookToFav } from '../store/BookActions';
import { getBookList$, getBookSearchName$, getBooksInFav$ } from '../store/BookSelectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$;
  booksInFav$;
  bookToSearch$;
  searchBookURL = 'https://www.googleapis.com/books/v1/volumes';
  bookName: string;
  booksInFavId;


  constructor(public http: HttpClient, public store$: Store, public router: Router) {}

  ngOnInit(): void {
    this.bookList$ = this.store$.select(getBookList$);
    this.booksInFav$ = this.store$.select(getBooksInFav$).pipe(tap(booksInFav => {
      this.booksInFavId = booksInFav.map(book => book.id);
    }));
    this.bookToSearch$ = this.store$.select(getBookSearchName$).pipe(map(book => book.bookName));
  }

  numSequence(n = 0, isRating: string) {
    const roundedNo = isRating === 'rating' ? Math.round(n) : 5 - Math.round(n);
    return Array(roundedNo);
  }

  addToFav(book) {
  this.store$.dispatch(addBookToFav(book));
  }

  onScroll(bookToSearch: string, bookList) {
    this.store$.dispatch(searchBooks({bookName: bookToSearch, startIndex: bookList.length.toString()}));
  }

  searchBooks() {
    this.store$.dispatch(searchBooks({bookName: this.bookName, startIndex: '0'}));
  }
}
