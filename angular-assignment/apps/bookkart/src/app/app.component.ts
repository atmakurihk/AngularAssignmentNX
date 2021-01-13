import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { CollectionService } from './collection.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'angular-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy{

  constructor(private collectionService:CollectionService,private cartService:CartService){

  }
  collectionCount !:number;
  cartCount !:number;

  collectionSubscription:Subscription;
  cartSubscription:Subscription;

  ngOnInit():void{
    this.collectionSubscription = this.collectionService.getCollectionSubject().subscribe(
      (bookData) =>{
        this.collectionCount = bookData.length;
      }
    );

    this.cartSubscription = this.cartService.getCartSubject().subscribe(
      (cartData) =>{
        this.cartCount = cartData.length;
        console.log("cart count ",this.cartCount);
      }
    )

  }

  ngOnDestroy():void{
    this.collectionSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();

  }
}
