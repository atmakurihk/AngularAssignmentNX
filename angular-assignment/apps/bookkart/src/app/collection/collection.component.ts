import { CollectionData } from './../models/collectionData.model';
import { BookData } from './../models/bookData.model';
import { Subscription } from 'rxjs';
import { CollectionService } from './../collection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-assignment-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  booksCollection!: CollectionData[];
  constructor(private collectionService: CollectionService) { }
  collectionSubscription!: Subscription;
  ngOnInit(): void {
   this.booksCollection = this.collectionService.getCollectionData();
    this.collectionSubscription = this.collectionService.getCollectionSubject().subscribe(
      (bookData) => {
        this.booksCollection = bookData;
      }
    );
  }

}
