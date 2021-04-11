import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {

    this.bookList$ = this.http.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=40').pipe(tap(book => console.log(book)));
  }

  numSequence(n = 0, isRating: string) {
    const roundedNo = isRating === 'rating' ? Math.round(n) : 5 - Math.round(n);
    return Array(roundedNo);
  }
}
