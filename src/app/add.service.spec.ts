import { TestBed } from '@angular/core/testing';
import { AddService } from './add.service';


describe('NameService', () => {
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
