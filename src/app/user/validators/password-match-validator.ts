import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class PasswordMatchValidator {
  static match(controlName: string, matchingControlName: string): ValidatorFn{
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if(!control || !matchingControl){
        console.error('Control not found!');
        return {
          controlNotfound: true
        };
      }

      const error = control.value === matchingControl.value ? null : { noMatch: true };

      matchingControl.setErrors(error);
      return error;
    }
  }
}
