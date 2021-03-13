import { Component, OnInit } from '@angular/core';
import { FieldConfig, ButtonConfig } from '../field-interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers: [ UsersService ],
})
export class SignupFormComponent implements OnInit {
  validForm: boolean;
  dservice: any;
  fields: FieldConfig[] = [
    {
      name: 'firstName',
      label: 'First Name',
      inputType: 'text',
      validator: [
        {
          min: 3,
          max: 20,
          message: 'The First name must be between 3 and 20',
        },
      ],
      validated: false,
      value: '',
      class: 'first-name-flex',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      inputType: 'text',
      validator: [
        {
          min: 3,
          max: 20,
          message: 'The Last name must be between 3 and 20',
        },
      ],
      validated: false,
      value: '',
      class: 'last-name-flex',
    },
    {
      name: 'email',
      label: 'Email',
      inputType: 'email',
      validator: [
        {
        message: 'The email is not a valid e-mail address',
        },
      ],
      value: '',
      validated: false
    },
    {
      name: 'password',
      label: 'Password',
      inputType: 'password',
      validator: [
        {
          min: 6,
          max: 12,
          message: ' The password must be between 6 and 12',
        },
      ],
      value: '',
      validated: false,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      inputType: 'password',
      validator: [
        {
          min: 6,
          max: 12,
          message: ' The password must be between 6 and 12',
        },
      ],
      value: '',
      validated: false,
    },
  ];

  buttons: ButtonConfig[] = [
    {
      type: 'submit',
      value: 'Submit',
      class: 'btn btn-primary'
    },
  ];

  submit(): void {
    this.validForm = true;
    this.fields.forEach(field => {
      if (!field.validated) {
        this.validForm = false;
      }
    });
    if (this.validForm) {
      let userStringArray: string[] = new Array();
      for (let i = 0; i < this.fields.length - 1; i++) {
        userStringArray.push(this.fields[i].value);
      }
      this.dservice.storeUser(userStringArray);
    }
  }

  constructor(private service: UsersService) {
    this.dservice = service;
   }

  ngOnInit(): void {
  }

}
