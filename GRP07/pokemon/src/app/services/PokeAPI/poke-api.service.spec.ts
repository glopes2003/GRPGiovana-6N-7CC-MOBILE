import { TestBed } from '@angular/core/testing';

import { PokeApiService } from '../PokeAPI/poke-api.service';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
