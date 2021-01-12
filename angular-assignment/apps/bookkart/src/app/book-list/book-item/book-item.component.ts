import { BookData } from './../../models/bookData.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-assignment-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book!: BookData;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
