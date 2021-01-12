import { Subject, Observable } from 'rxjs';
import { BookData } from './models/bookData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private books: BookData[] = [];
  private collectionDataUpdated = new Subject<BookData[]>();
  constructor() { }

  addToCollection(book: BookData): void {
    this.books.push(book);
    this.collectionDataUpdated.next(this.books.slice());
    console.log("added to collection");
  }

  getCollectionSize(): number {
    return this.books.length;
  }

  getCollectionSubject(): Observable<BookData[]>
  {
    return this.collectionDataUpdated.asObservable();
  }

  getCollectionData(): BookData[]
  {
    return this.books;
  }
}
