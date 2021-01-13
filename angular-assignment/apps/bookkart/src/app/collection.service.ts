import { CollectionData } from './models/collectionData.model';
import { BillingAddress } from './models/billingAddress.model';
import { Subject, Observable } from 'rxjs';
import { BookData } from './models/bookData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private books: CollectionData[] = [];
  private collectionDataUpdated = new Subject<CollectionData[]>();
  private collectionData: CollectionData;
  constructor() { }

  addToCollection(book: BookData, billing: BillingAddress): void {
    console.log("billing address", billing);
    this.collectionData = new CollectionData(book, billing);
    this.books.push(this.collectionData);
    this.collectionDataUpdated.next(this.books.slice());
    console.log("added to collection", this.collectionData);
  }

  getCollectionSize(): number {
    return this.books.length;
  }

  getCollectionSubject(): Observable<CollectionData[]> {
    return this.collectionDataUpdated.asObservable();
  }

  getCollectionData(): CollectionData[] {
    return this.books;
  }

  addCartToCollection(cartData: BookData[], billing: BillingAddress) {
    cartData.forEach(
      (book) => {
        this.collectionData = new CollectionData(book, billing);
        this.books.push(this.collectionData);
      }
    )
    this.collectionDataUpdated.next(this.books.slice());
  }
}
