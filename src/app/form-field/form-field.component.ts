import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../field-interface';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  validationFailed: boolean;

  @Input()
    field: FieldConfig;

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(currentValue: string): void{
    this.validationFailed = this.validate(currentValue);
    if (!this.validationFailed){
      this.field.value = currentValue;
      this.field.validated = true;
    } else {
      this.field.validated = false;
    }
  }

  private validate(value: string): boolean{
    if (this.field.inputType !== 'email'){
      if (value.length > this.field.validator[0].max || value.length < this.field.validator[0].min) {
        return true;
      } else {
        return false;
      }
    } else {
      const regExPattern = /^[a-zA-Z0-9.!#*%&'*+/-?^_`{|}`-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Pattern found on w3resource.org
      return (!regExPattern.test(value.toLowerCase()));
    }
  }

}
