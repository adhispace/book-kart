import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchBooks } from '../store/BookActions';
import { getBooksInCart$ } from '../store/BookSelectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bookToSearch: string;
  booksInCart$;

  constructor(public store$: Store, public router: Router) { }

  ngOnInit(): void {
    this.booksInCart$ = this.store$.select(getBooksInCart$);
  }

  searchBooks() {
    this.store$.dispatch(searchBooks({bookName: this.bookToSearch}));
  }

  navigateToCart() {
    this.router.navigate(['cart']);
  }

}
