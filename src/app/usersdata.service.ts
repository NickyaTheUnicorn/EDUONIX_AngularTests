import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor() { }

  getUserInformations(id: number): UserInterface{
    let currentUser = null;
    const users = JSON.parse(localStorage.getItem('users-data'));
    users.forEach(user => {
      if (user.id === id) {
        currentUser = user;
      }
    });
    return currentUser;
  }
}
