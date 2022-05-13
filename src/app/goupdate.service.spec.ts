import { TestBed } from '@angular/core/testing';
import { GoUpdate } from './goupdate.service';



describe('GoUpdate', () => {
  let service: GoUpdate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoUpdate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
