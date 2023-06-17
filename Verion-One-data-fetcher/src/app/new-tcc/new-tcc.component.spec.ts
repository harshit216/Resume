import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTCCComponent } from './new-tcc.component';

describe('NewTCCComponent', () => {
  let component: NewTCCComponent;
  let fixture: ComponentFixture<NewTCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
