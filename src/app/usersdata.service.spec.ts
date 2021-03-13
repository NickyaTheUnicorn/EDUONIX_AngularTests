import { TestBed } from '@angular/core/testing';
import { UserInterface } from './user-interface';
import { UsersService } from './users.service';

import { UsersdataService } from './usersdata.service';

describe('UsersdataService', () => {
  let service: UsersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersdataService);
    localStorage.removeItem('users-data');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user', () => {
    const user: UserInterface = {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      password: 'password'
    };
    localStorage.setItem('users-data', JSON.stringify([user]));
    const returnedUser = service.getUserInformations(user.id);
    expect(returnedUser).not.toBeNull();
    expect(returnedUser.id).toEqual(1);
    expect(returnedUser.firstName).toEqual(user.firstName);
  });
});
