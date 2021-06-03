import { createReducer, on } from "@ngrx/store";
import { addBook, deleteBook, getBookDetail, loadBooks } from "./BookActions";

export interface State {

}

export const initialState = {
    bookDetail : {},
    books: [],

}

export const BookKartReducer = createReducer(
    initialState,
    on(getBookDetail, () => ({})),
    on(loadBooks, () => ({})),
    on(deleteBook, () => ({})),
    on(addBook, () => ({}))
)

export const selectBook = (state) => state.bookDetail;