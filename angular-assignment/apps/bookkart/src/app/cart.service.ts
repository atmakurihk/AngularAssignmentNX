import { Subject, Observable } from 'rxjs';
import { BookData } from './models/bookData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private books: BookData[] = [];
  private cartUpated = new Subject<BookData[]>();

  constructor() { }

  addToCart(book:BookData):void
  {
    this.books.push(book);
    this.cartUpated.next(this.books.slice());
    console.log("cart data ",this.books);
  }

  getCartSubject():Observable<BookData[]>
  {
    return this.cartUpated.asObservable();
  }

  getBooksIncart():BookData[]
  {
    return this.books.slice();
  }

  removeFromCart(index:number):void{
    this.books.splice(index,1);
    this.cartUpated.next(this.books.slice());
  }
}
