import { BookData } from './models/bookData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private books: BookData[] = [];

  constructor() { }

  addToCart(book:BookData):void
  {
    this.books.push(book);
  }
}
