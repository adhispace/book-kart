import { Action, createReducer, on } from "@ngrx/store";
import { addBookToCart, deleteBookFromCart, getBookDetail, loadSearchedBooks, searchBooks } from "./BookActions";
import { filter } from 'rxjs/operators';

export interface BookState {
    bookDetail: any;
    books: [],
    booksInCart: [],
    bookToSearch: string
}

export const initialState: BookState = {
    bookDetail : {},
    books: [],
    booksInCart: [],
    bookToSearch: ''
}

export const bookKartReducer = createReducer(
    initialState,
    on(getBookDetail, () => ({})),
    on(searchBooks, (state, bookName) => ({...state, bookToSearch: bookName})),
    on(loadSearchedBooks, (state, allBooks) => ({...state, books: allBooks})),
    on(deleteBookFromCart, (state: any, book: any) => ({...state, booksInCart: removeBook(state, book)})),
    on(addBookToCart, (state: any, book) => ({...state, booksInCart: [...state.booksInCart, book]}))
)

export function reducer(state: BookState, action: Action) {
    return bookKartReducer(state, action)
}

function removeBook(state, book) {
    return state.booksInCart.filter(cartBook => cartBook.id !== book.id);
}

