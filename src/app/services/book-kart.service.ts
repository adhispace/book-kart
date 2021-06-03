import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookKartService {


  bookVolumeAPI = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getAllBooksBySearchString(searchString: string) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=40');
  }

  getBookDetail() {
    return this.http.get('');
  }
}
