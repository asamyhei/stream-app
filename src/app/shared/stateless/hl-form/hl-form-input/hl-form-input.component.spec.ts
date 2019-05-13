import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HlFormInputComponent} from './hl-form-input.component';

describe('HlFormInputComponent', () => {
  let component: HlFormInputComponent;
  let fixture: ComponentFixture<HlFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HlFormInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
