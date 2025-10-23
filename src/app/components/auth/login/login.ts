import { Component, inject } from '@angular/core';
import { ZardCardComponent } from 'y/card/card.component';
import { ZardButtonComponent } from 'y/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormat } from 'src/app/models/quo.model';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  imports: [ZardButtonComponent, ZardCardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  idEmail = '';
  idPassword = '';
  authService = inject(Auth);
  router = inject(Router);

  loginform: FormGroup = new FormGroup<LoginFormat>({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onlogin() {
    const formData = this.loginform.value;
    this.authService.login(formData).subscribe({
      next: (response: any) => {
        this.router.navigateByUrl('dashboard');
      },
      error: (error) => {
        alert(error);
        window.location.reload();
      },
    });
  }
}
