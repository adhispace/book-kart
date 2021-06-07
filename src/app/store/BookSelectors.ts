import { createSelector } from "@ngrx/store";

export const bookState = state => state.bookKart;

export const getBookList$ = createSelector(bookState, (state: any) => {
    return state.books;
});

export const getBooksInCart$ = createSelector(bookState, (state: any) => state.booksInCart);

export const getBookSearchName$ = createSelector(bookState, (state: any) => state.bookToSearch);