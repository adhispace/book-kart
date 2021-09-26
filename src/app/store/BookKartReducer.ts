import { Action, createReducer, on } from "@ngrx/store";
import { addBookToFav, deleteBookFromFav, getBookDetail, loadSearchedBooks, searchBooks } from "./BookActions";
import { filter } from 'rxjs/operators';

export interface BookState {
    bookDetail: any;
    books: [],
    booksInFav: [],
    bookToSearch: string
}

export const initialState: BookState = {
    bookDetail : {},
    books: [],
    booksInFav: [],
    bookToSearch: ''
}

export const bookKartReducer = createReducer(
    initialState,
    on(getBookDetail, () => ({})),
    on(searchBooks, (state, bookName) => ({...state, bookToSearch: bookName})),
    on(loadSearchedBooks, (state: any, allBooks: any) => ({...state, books: [...state.books, ...allBooks.items]})),
    on(deleteBookFromFav, (state: any, book: any) => ({...state, booksInFav: removeBook(state, book)})),
    on(addBookToFav, (state: any, book) => ({...state, booksInFav: [...state.booksInFav, book]}))
)

export function reducer(state: BookState, action: Action) {
    return bookKartReducer(state, action)
}

function removeBook(state, book) {
    return state.booksInFav.filter(favBook => favBook.id !== book.id);
}

