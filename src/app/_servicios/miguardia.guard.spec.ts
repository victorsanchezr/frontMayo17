import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { miguardiaGuard } from './miguardia.guard';

describe('miguardiaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => miguardiaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
