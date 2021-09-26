import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FavComponent } from './fav/fav.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookKartEffect } from './store/BookKartEffect';
import { FormsModule } from '@angular/forms';
import * as BookKartReducer from './store/BookKartReducer';
import { HeaderComponent } from './header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ThemeModule } from './theme/theme.module';
import { darkTheme } from './theme/dark-theme';
import { lightTheme } from './theme/light-theme';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    WishlistComponent,
    FavComponent,
    BookFilterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({bookKart: BookKartReducer.reducer}),
    EffectsModule.forRoot([BookKartEffect]),
    InfiniteScrollModule,
    ThemeModule.forRoot({
      themes: [darkTheme, lightTheme],
      activeTheme: 'light'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
