import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookKartEffect } from './store/BookKartEffect';
import { FormsModule } from '@angular/forms';
import * as BookKartReducer from './store/BookKartReducer';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    WishlistComponent,
    CartComponent,
    BookFilterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({bookKart: BookKartReducer.reducer}),
    EffectsModule.forRoot([BookKartEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
