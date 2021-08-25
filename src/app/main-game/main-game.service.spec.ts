import { TestBed } from '@angular/core/testing';

import { MainGameService } from './main-game.service';

describe('MainService', () => {
  let service: MainGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
