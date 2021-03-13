import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SignupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be valid', () => {
    component.fields[0].value = 'firstName';
    component.fields[1].value = 'lastName';
    component.fields[2].value = '';
    component.fields[3].value = '123455';
    component.fields[4].value = '123455';
    component.submit();
    fixture.detectChanges();
    expect(component.validForm).toBeFalse();
  });

  it('should be valid and create user', () => {
    component.fields[0].value = 'firstName';
    component.fields[1].value = 'lastName';
    component.fields[2].value = 'email@eamil.com';
    component.fields[3].value = '123456';
    component.fields[4].value = '123456';
    component.fields.forEach(field => {
      field.validated = true;
    });
    component.submit();
    fixture.detectChanges();
    expect(component.validForm).toBeTrue();

    expect(JSON.parse(localStorage.getItem('users-data'))[0].firstName).toEqual(component.fields[0].value);
  });
});
