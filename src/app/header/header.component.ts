import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchBooks } from '../store/BookActions';
import { getBooksInFav$ } from '../store/BookSelectors';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  booksInFav$;
  activeTheme: string;
  bookName = '';

  constructor(public store$: Store, public router: Router, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.booksInFav$ = this.store$.select(getBooksInFav$);
    this.activeTheme = this.themeService.getActiveTheme().name;
  }

  toggleTheme() {
    if (this.themeService.getActiveTheme().name === 'light') {
      this.themeService.setActiveTheme('dark');
    }
    else {
      this.themeService.setActiveTheme('light');
    }
    this.activeTheme = this.themeService.getActiveTheme().name;
  }

  navigateToFav() {
    this.router.navigate(['fav']);
  }

  searchBooks() {
    this.store$.dispatch(searchBooks({bookName: this.bookName, startIndex: '0'}));
  }

}
