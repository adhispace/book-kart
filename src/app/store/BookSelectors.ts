import { createSelector } from "@ngrx/store";

export const bookState = state => state.bookKart;

export const getBookList$ = createSelector(bookState, (state: any) => {
    return state.books;
});

export const getBooksInFav$ = createSelector(bookState, (state: any) => state.booksInFav);

export const getBookSearchName$ = createSelector(bookState, (state: any) => state.bookToSearch);