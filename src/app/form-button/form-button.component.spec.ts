import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonConfig } from '../field-interface';

import { FormButtonComponent } from './form-button.component';

describe('FormButtonComponent', () => {
  let component: FormButtonComponent;
  let fixture: ComponentFixture<FormButtonComponent>;
  let buttonTest: ButtonConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    buttonTest = {
      type: 'button',
      value: 'value',
      class: 'btn btn-primary'
    };

    fixture = TestBed.createComponent(FormButtonComponent);
    component = fixture.componentInstance;
    component.button = buttonTest;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct type', () => {
    expect(component.button.type).toEqual(buttonTest.type);
  });

  it('should have correct value', () => {
    expect(component.button.value).toEqual(buttonTest.value);
  });
});
