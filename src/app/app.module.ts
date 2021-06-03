import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookKartReducer } from './store/BookKartReducer';
import { BookKartEffect } from './store/BookKartEffect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    WishlistComponent,
    CartComponent,
    BookFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({bookKartReducer: BookKartReducer}),
    EffectsModule.forRoot([BookKartEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
