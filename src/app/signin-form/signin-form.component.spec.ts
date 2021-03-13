import { FormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from '../app-routing.module';
import { SigninFormComponent } from './signin-form.component';
import { UserInterface } from '../user-interface';

describe('SigninFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;
  const signinObject: any = null;
  const mockedUser: UserInterface = {
    id: 1,
    firstName: 'FirstName',
    lastName: 'lastName',
    email: 'test@test.com',
    password: '123456'
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ SigninFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.clear();
    localStorage.setItem('users-data', JSON.stringify([mockedUser]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be validated', () => {
    component.fields[0].value = 'test';
    component.fields[1].value = '12345';
    component.submit(signinObject);
    fixture.detectChanges();
    expect(component.formValid).toBeFalse();
  });

  it('should be valid', () => {
    component.fields[0].value = 'test@test.com';
    component.fields[1].value = '123456';
    component.submit(signinObject);
    fixture.detectChanges();
    expect(component.formValid).toBeTrue();
  });

});
