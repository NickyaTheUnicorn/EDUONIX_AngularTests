import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user-interface';
import { UsersdataService } from '../usersdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ UsersdataService ],
})
export class DashboardComponent implements OnInit {

  dservice: any;
  currentUser: UserInterface;

  constructor(private userService: UsersdataService) {
    this.dservice = userService;
    this.currentUser = userService.getUserInformations(JSON.parse(localStorage.getItem('currentUser')));
   }

  ngOnInit(): void {
  }

}
