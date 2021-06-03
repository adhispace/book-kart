import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { BookKartService } from "../services/book-kart.service";
import { loadBooks, SearchBooks } from "./BookActions";
import { props } from '@ngrx/store';

@Injectable()
export class BookKartEffect {

    constructor(private actions$: Actions, private bookKartService: BookKartService) {}

    searchBooks$ = createEffect(() => this.actions$.pipe(
        ofType(SearchBooks.type),
        switchMap((action) => {
            return this.bookKartService.getAllBooksBySearchString('').pipe(map((res: any) => {
                return loadBooks(res);
            }));
        })
    ));
}