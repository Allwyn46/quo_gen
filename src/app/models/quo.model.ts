import { FormControl } from '@angular/forms';

export interface LoginFormat {
  username: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterFormat {
  username: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  ismfaactive: FormControl<boolean>;
}
