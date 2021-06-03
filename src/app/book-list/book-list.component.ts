import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { SearchBooks } from '../store/BookActions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$;
  bookToSearch: string;
  searchBookURL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(public http: HttpClient, public store$: Store) {}

  ngOnInit(): void {
  }

  searchBooks() {
    const params = new HttpParams().set('q', this.bookToSearch);
    this.bookList$ = this.http.get(this.searchBookURL, {params})
    .pipe(tap(book => console.log(book)));

    this.store$.dispatch(SearchBooks({bookName: this.bookToSearch}));

  }

  numSequence(n = 0, isRating: string) {
    const roundedNo = isRating === 'rating' ? Math.round(n) : 5 - Math.round(n);
    return Array(roundedNo);
  }
}
