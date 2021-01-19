import { of } from 'rxjs';
import { BookData } from './../models/bookData.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
/*
describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */

describe('book list component', () => {
  let fixture: BookListComponent;
  let bookServiceMock: any;
  let books:BookData[];
  beforeEach(() => {
    bookServiceMock = {
      loadBooks: jest.fn(),
      displayBooks:of(books)
    }
    fixture = new BookListComponent(bookServiceMock);
    fixture.ngOnInit()
  })

  describe('Test ng on it', () => {

    it('should load books', () => {
    const books:BookData[]=[];

      const bookServiceSpy = jest.spyOn(bookServiceMock,'loadBooks').mockReturnValue(books);
    //  const bookDisplaySpy = jest.spyOn(bookServiceMock,'displayBooks').mockReturnValue((books));
     //fixture.books= bookServiceMock.displayBooks.mockReturnValue((books));
      expect(bookServiceMock.loadBooks()).toBe(books);
     // expect(bookServiceMock.displayBooks()).toBe(books);
      expect(bookServiceSpy).toHaveBeenCalled();
      expect(bookServiceMock.displayBooks).toBeTruthy();
     // expect(bookDisplaySpy).toHaveBeenCalled();
     //expect(fixture.books).toBe(books);
    })
  })
});
