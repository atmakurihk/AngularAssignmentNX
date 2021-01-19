import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add to cart', () => {
    expect(service.addToCart).toBeTruthy();
  });

  it('get cart subject', () => {
    expect(service.getCartSubject()).toBeTruthy();
  });

  it('get books in cart', () => {

    expect(service.getBooksIncart()).toBeTruthy();
  });

  it('remove from cart', () => {
    expect(service.removeFromCart).toBeTruthy();
  });

  it('clear cart', () => {
    expect(service.clearCart).toBeTruthy()
  })

});
