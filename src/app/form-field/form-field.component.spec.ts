import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldConfig, Validators } from '../field-interface';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;
  let formFieldTestComponent: FieldConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    formFieldTestComponent = {
      inputType: 'email',
      label: 'label',
      name: 'fieldName',
      validated: false,
      validator: [
        {
          message: 'Validator Message'
        },
      ],
    };
    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;
    component.field = formFieldTestComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be not validated email', () => {
    formFieldTestComponent.value = 'test';
    component.onBlur(formFieldTestComponent.value);
    fixture.detectChanges();
    expect(component.field.validated).toBeFalse();
  });

  it('should be validated email', () => {
    formFieldTestComponent.value = 'test@test.com';
    component.onBlur(formFieldTestComponent.value);
    fixture.detectChanges();
    expect(component.field.validated).toBeTrue();
  });

  it('should be not validated min', () => {
    formFieldTestComponent.inputType = 'text';
    formFieldTestComponent.validator = [
      {
        min: 3,
        max: 5,
        message: 'Message'
      }
    ];
    formFieldTestComponent.value = '12';
    component.onBlur(formFieldTestComponent.value);
    fixture.detectChanges();
    expect(component.field.validated).toBeFalse();
  });

  it('should be not validated on max', () => {
    formFieldTestComponent.inputType = 'text';
    formFieldTestComponent.validator = [
      {
        min: 3,
        max: 5,
        message: 'Message'
      }
    ];
    formFieldTestComponent.value = '123456';
    component.onBlur(formFieldTestComponent.value);
    fixture.detectChanges();
    expect(component.field.validated).toBeFalse();
  });

  it('should be validated min-max', () => {
    formFieldTestComponent.inputType = 'text';
    formFieldTestComponent.validator = [
      {
        min: 3,
        max: 5,
        message: 'Message'
      }
    ];
    formFieldTestComponent.value = '1234';
    component.onBlur(formFieldTestComponent.value);
    fixture.detectChanges();
    expect(component.field.validated).toBeTrue();
  });
});
