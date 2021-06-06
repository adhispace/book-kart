import { createAction, props } from '@ngrx/store';

export const searchBooks = createAction('[search page] get books', props<{bookName: string}>());
export const getBookDetail = createAction('[search page] get book detail');
export const loadSearchedBooks = createAction('[search page] load books into dom', props<{bookList}>());
export const deleteBookFromCart = createAction('[search page] delete book from kart');
export const addBookToCart = createAction('[search page] add book to kart', props<{bookDetails}>());

