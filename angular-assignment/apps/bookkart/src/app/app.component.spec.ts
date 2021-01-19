import { BookData } from './models/bookData.model';
import { CartService } from './cart.service';
import { CollectionData } from './models/collectionData.model';
import { of, Subscription } from 'rxjs';
import { CollectionService } from './collection.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'

describe('AppComponent', () => {
  let subscriptionMock :Subscription;
  beforeEach(async () => {
    subscriptionMock = new Subscription();
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get collection count',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const collectionValue : CollectionData[]=[];
    const collectionService = fixture.debugElement.injector.get(CollectionService);
    const collectionSpy = spyOn(collectionService,'getCollectionSubject').and.returnValue(of(collectionValue));
    fixture.detectChanges();
    expect(app.collectionCount).toBe(0);
  });

  it('should get cart count',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const cartValue : BookData[]=[];
    const cartService = fixture.debugElement.injector.get(CartService);
    const collectionSpy = spyOn(cartService,'getCartSubject').and.returnValue(of(cartValue));
    fixture.detectChanges();
    expect(app.cartCount).toBe(0);
  });
});
