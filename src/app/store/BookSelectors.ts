import { createSelector } from "@ngrx/store";
import { BookState } from './BookKartReducer';

export const bookState = (state: BookState) => state;

export const getBookList$ = createSelector(bookState, (state: any) => {
    return state.bookKart.books;
});