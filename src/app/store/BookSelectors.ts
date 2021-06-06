import { createSelector } from "@ngrx/store";

export const bookState = state => state.bookKart;

export const getBookList$ = createSelector(bookState, (state: any) => state.books);

export const getBooksInCart$ = createSelector(bookState, (state: any) => state.booksInCart);