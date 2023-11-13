import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }

  // check if controller value is numeric or not
  numericValidator(control: FormControl) {
    const value = control.value;

    if (value && isNaN(value)) {
      return { 'numericInvalid': true };
    }

    return null;
  }
}
