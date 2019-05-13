export class CustomValidator {

// Validates passwords
  static matchPassword(group): any {
    const password = group.controls.initialPassword;
    const confirm = group.controls.confirmPassword;
    group.markAsTouched();
    if (password.pristine || confirm.pristine || password.value === confirm.value) {
      return null;
    }
    return {
      invalidPassword: true
    };
  }

// Validates numbers
  static numberValidator(number: any) {
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    if (number.pristine || NUMBER_REGEXP.test(number.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }
}
