import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { windowTime } from 'rxjs';
import { RegisterFormat } from 'src/app/models/quo.model';
import { Auth } from 'src/app/services/auth';
import { ZardButtonComponent } from 'y/button/button.component';
import { ZardCardComponent } from 'y/card/card.component';

@Component({
  selector: 'app-register',
  imports: [ZardCardComponent, ZardButtonComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  authservice = inject(Auth);
  router = inject(Router);

  passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl) => {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      }
      return null;
    };
  }

  registerForm: FormGroup = new FormGroup<RegisterFormat>(
    {
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
    },
    { validators: this.passwordMatchValidator() },
  );

  onRegister() {
    const formData = this.registerForm.value;
    this.authservice.register(formData).subscribe({
      next: (response: any) => {
        this.router.navigateByUrl('login');
      },
      error: (error) => {
        console.log(error);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      },
    });
  }
}
