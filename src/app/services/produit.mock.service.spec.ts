import { TestBed } from '@angular/core/testing';

import { ProduitMockService } from './produit.mock.service';
import { Produit } from '../shared/produit';

describe('Produit.MockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduitMockService = TestBed.get(ProduitMockService);
    expect(service).toBeTruthy();
  });
});
