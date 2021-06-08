import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { BookKartService } from "../services/book-kart.service";
import { loadSearchedBooks, searchBooks } from "./BookActions";
import { props } from '@ngrx/store';

@Injectable()
export class BookKartEffect {

    constructor(private actions$: Actions, private bookKartService: BookKartService) {}

    searchBooks$ = createEffect(() => this.actions$.pipe(
        ofType(searchBooks.type),
        switchMap((action: any) => {
            return this.bookKartService.getAllBooksBySearchString(action.bookName, action.startIndex).pipe(map((res: any) => {
                return loadSearchedBooks(res);
            }));
        })
    ));
}