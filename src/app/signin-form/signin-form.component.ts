import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldConfig, ButtonConfig } from '../field-interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
  providers: [
    UsersService
  ]
})

export class SigninFormComponent implements OnInit {
  formValid: boolean;
  dservice: any;
  fields: FieldConfig[] = [
    {
      label: 'email',
      name: 'Email',
      inputType: 'email',
      value: '',
      validator: [
        {
          message: 'Email is not valid',
        },
      ],
      validated: false,
    },
    {
      label: 'password',
      name: 'Password',
      inputType: 'password',
      value: '',
      validator: [
        {
          min: 6,
          max: 12,
          message: 'The password must be between 6 and 12',
        },
      ],
      validated: false,
    },
  ];

  buttons: ButtonConfig[] = [
    {
      type: 'submit',
      value: 'Login',
      class: 'btn btn-primary'
    },
  ];
  private router: Router;

  submit(signin: any): void {
    this.fields.forEach(field => {
      if (!field.validated) {
        signin.form.status = 'INVALID';
        this.formValid = false;
      }
    });

    const email = this.fields[0].value;
    const userPassword = this.dservice.getUserPassword(email);
    if (userPassword === '') {
      this.formValid = false;
    }

    if (this.fields[1].value !== userPassword) {
      this.formValid = false;
    } else {
      localStorage.setItem('currentUser', JSON.stringify(this.dservice.getUserId(email)));
      this.route.navigate(['/dashboard']);
    }
  }

  constructor(private service: UsersService, private route: Router) {
    this.dservice = service;
  }

  ngOnInit(): void {
  }

}
