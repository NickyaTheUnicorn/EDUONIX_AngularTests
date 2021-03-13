import { TestBed } from '@angular/core/testing';
import { UserInterface } from './user-interface';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let userObject: UserInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
    userObject = {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      password: 'password'
    };
    localStorage.removeItem('users-data');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create User', () => {
    const user: string[] = [
      'firstName',
      'lastName',
      'email',
      'password'
    ];
    service.storeUser(user);
    const users: UserInterface[] = JSON.parse(localStorage.getItem('users-data'));
    expect(users.length).toEqual(1);
    expect(users[0].firstName).toEqual(user[0]);
  });

  it('should get Id', () => {
    localStorage.setItem('users-data', JSON.stringify([userObject]));
    const id: number = service.getUserId(userObject.email);
    expect(id).toEqual(userObject.id);
  });

  it('should get Password', () => {
    localStorage.setItem('users-data', JSON.stringify([userObject]));
    const password: string = service.getUserPassword(userObject.email);
    expect(password).toEqual(userObject.password);
  });

});


