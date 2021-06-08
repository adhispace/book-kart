import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookKartService {


  bookVolumeAPI = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getAllBooksBySearchString(searchString: string, startIndex: string) {
    const params = new HttpParams()
      .set('q', searchString)
      .set('maxResults', '40')
      .set('startIndex', startIndex)
      .set('key', 'AIzaSyAZWM1eMOoDhZMZ0z5tJ8x3kwnhDjDB7CE');
    return this.http.get('https://www.googleapis.com/books/v1/volumes', {params});
  }

  getBookDetail() {
    return this.http.get('');
  }
}
