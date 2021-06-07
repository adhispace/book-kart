import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookKartService {


  bookVolumeAPI = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getAllBooksBySearchString(searchString: string) {
    const params = new HttpParams().set('q', searchString).set('maxResults', '40');
    return this.http.get('https://www.googleapis.com/books/v1/volumes', {params});
  }

  getBookDetail() {
    return this.http.get('');
  }
}
