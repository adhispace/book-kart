import { Action, createReducer, on } from "@ngrx/store";
import { addBook, deleteBook, getBookDetail, loadBooks } from "./BookActions";

export interface BookState {
    bookDetail: any;
    books: []
}

export const initialState: BookState = {
    bookDetail : {},
    books: [],

}

export const bookKartReducer = createReducer(
    initialState,
    on(getBookDetail, () => ({})),
    on(loadBooks, (state, allBooks) => ({...state, books: allBooks})),
    on(deleteBook, () => ({})),
    on(addBook, () => ({}))
)

export function reducer(state: BookState, action: Action) {
    return bookKartReducer(state, action)
}
