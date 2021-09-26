import { createAction, props } from '@ngrx/store';

export const searchBooks = createAction('[search page] get books', props<{bookName: string, startIndex: string}>());
export const getBookDetail = createAction('[search page] get book detail');
export const loadSearchedBooks = createAction('[search page] load books into dom', props<{bookList}>());
export const deleteBookFromFav = createAction('[search page] delete book from fav', props<{bookDetails}>());
export const addBookToFav = createAction('[search page] add book to fav', props<{bookDetails}>());

