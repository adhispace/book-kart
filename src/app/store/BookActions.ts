import { createAction, props } from '@ngrx/store';

export const SearchBooks = createAction('bookKart get books', props<{bookName: string}>());
export const getBookDetail = createAction('bookKart get book detail');
export const loadBooks = createAction('bookKart load books into dom', props<{bookList}>());
export const deleteBook = createAction('bookKart delete book from kart');
export const addBook = createAction('bookKart add book to kart');

