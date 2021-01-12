import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'angular-assignment-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString = '';
  constructor(private bookService: BookService) { }


  ngOnInit(): void {
  }

  searchBooks(): void {
    this.bookService.getBooks(this.searchString);
  }
}
