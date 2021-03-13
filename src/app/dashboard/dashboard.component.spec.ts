import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInterface } from '../user-interface';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let userTest: UserInterface;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    userTest = {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      password: 'password'
    };

    localStorage.clear();
    localStorage.setItem('users-data', JSON.stringify([userTest]));
    localStorage.setItem('currentUser', JSON.stringify(userTest.id));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user', () => {
    expect(component.currentUser).not.toBeNull();
  });

  it('should have the correct user\'s first name', () => {
    expect(component.currentUser.firstName).toEqual(userTest.firstName);
  });

});
