import { FormControl } from '@angular/forms';

export interface LoginFormat {
  username: FormControl<string>;
  password: FormControl<string>;
}
