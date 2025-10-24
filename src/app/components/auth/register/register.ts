import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterFormat } from 'src/app/models/quo.model';
import { ZardButtonComponent } from 'y/button/button.component';
import { ZardCardComponent } from 'y/card/card.component';

@Component({
  selector: 'app-register',
  imports: [ZardCardComponent, ZardButtonComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup = new FormGroup<RegisterFormat>({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    ismfaactive: new FormControl(false, {
      nonNullable: true,
    }),
  });

  onRegister() {}
}
