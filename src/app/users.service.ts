import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: UserInterface[] = [];


  constructor() {
  }

  getUserPassword(email: string): string {
    console.log(this.users);
    this.users = JSON.parse(localStorage.getItem('users-data'));
    let password = '';
    this.users.forEach(element => {
      if (element.email === email) {
        password = element.password;
      }
    });
    return password;
  }

  getUserId(email: string): number{
    let id = null;
    this.users = JSON.parse(localStorage.getItem('users-data'));
    this.users.forEach(user => {
      if (user.email === email) {
        id = user.id;
      }
    });
    return id;
  }

  storeUser(user: string[]): void {
    this.users = JSON.parse(localStorage.getItem('users-data')) || this.users;
    console.log(this.users);
    const newUser: UserInterface = {
      id: this.users.length + 1,
      firstName: user[0],
      lastName: user[1],
      email: user[2],
      password: user[3]
    };
    this.users.push(newUser);
    localStorage.setItem('users-data', JSON.stringify(this.users));
  }
}
