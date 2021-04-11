import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-kart';

  constructor(public http: HttpClient) {}

  ngOnInit(): void {

    this.http.get('https://www.googleapis.com/books/v1/volumes?q=tamil').subscribe(res => {
      console.log(res);
    })
  }

}

