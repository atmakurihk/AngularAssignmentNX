import { TestBed } from '@angular/core/testing';

import { CollectionService } from './collection.service';

describe('CollectionService', () => {
  let service: CollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add to collection test', () => {
    expect(service.addCartToCollection).toBeTruthy();
  });

  it('get collection size', () => {
    expect(service.getCollectionSize).toBeTruthy();
  });

  it('get collection subject', () => {
    expect(service.getCollectionSubject).toBeTruthy();
  });

  it('get collection data', () => {
    expect(service.getCollectionData).toBeTruthy();

  });
  it('add colletion to cart', () => {
    expect(service.addCartToCollection).toBeTruthy();
  })
});
