import { Component } from '@angular/core';
import { ZardCardComponent } from 'y/card/card.component';
import { ZardButtonComponent } from 'y/button/button.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ZardButtonComponent, ZardCardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  idEmail = '';
  idPassword = '';
}
