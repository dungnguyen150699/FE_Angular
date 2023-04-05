import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookelementComponent } from './bookelement.component';

describe('BookelementComponent', () => {
  let component: BookelementComponent;
  let fixture: ComponentFixture<BookelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
