import { Component, OnInit, Input } from '@angular/core';
import { ButtonConfig } from '../field-interface';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  @Input()
    button: ButtonConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
