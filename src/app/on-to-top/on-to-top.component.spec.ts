import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnToTopComponent } from './on-to-top.component';

describe('OnToTopComponent', () => {
  let component: OnToTopComponent;
  let fixture: ComponentFixture<OnToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnToTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
