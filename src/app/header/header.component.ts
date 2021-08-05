import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchBooks } from '../store/BookActions';
import { getBooksInCart$ } from '../store/BookSelectors';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  booksInCart$;
  activeTheme: string;

  constructor(public store$: Store, public router: Router, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.booksInCart$ = this.store$.select(getBooksInCart$);
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

  navigateToCart() {
    this.router.navigate(['cart']);
  }

}
