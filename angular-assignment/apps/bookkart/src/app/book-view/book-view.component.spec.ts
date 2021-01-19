import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BookViewComponent } from './book-view.component';

describe('book view component', () => {
  let fixture: BookViewComponent;
  let routerMock: any;
  let bookServiceMock: any;
  let cartServiceMock: any;
  let routeMock: any;
  beforeEach(() => {
    bookServiceMock = {
      getbookById: jest.fn()
    };
    cartServiceMock = {
      addToCart: jest.fn()
    };
    routerMock = {
      navigate: jest.fn()
    };
    routeMock = {
      params: of(convertToParamMap({ id: '123' }))
    };

    fixture = new BookViewComponent(
      routeMock,
      bookServiceMock,
      cartServiceMock,
      routerMock
    );
    fixture.ngOnInit();

  });

  describe('Test ngOninit book view component', () => {

    it('should get params', () => {
      expect(routeMock.params).toBeTruthy();
    });

    it('should get book by id', () => {
      let book: any = {};
      let id = '123';
      const bookServicespy = jest.spyOn(bookServiceMock, 'getbookById').mockReturnValue(book);
      expect(bookServiceMock.getbookById([id])).toBe(book);
      expect(bookServicespy).toHaveBeenCalled();
    });
  });

  describe('Test add to cart', () => {
    it('add to cart', () => {
      const cartserviceSpy = jest.spyOn(cartServiceMock, 'addToCart');
      fixture.addToCart();
      expect(cartserviceSpy).toBeCalledTimes(1);
    });
  });

  describe('test buy now', () => {
    it('click buy now', () => {
      fixture.buyNow();
      expect(routerMock.navigate).toHaveBeenCalledWith([fixture.id, 'buy']);
    });

  });
});
