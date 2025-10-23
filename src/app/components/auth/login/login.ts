import { Component } from '@angular/core';
import { ZardCardComponent } from 'y/card/card.component';
import { ZardButtonComponent } from 'y/button/button.component';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormat } from 'src/app/models/quo.model';

@Component({
  selector: 'app-login',
  imports: [ZardButtonComponent, ZardCardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  idEmail = '';
  idPassword = '';

  loginform: FormGroup = new FormGroup<LoginFormat>({
    username: new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.email]),
    password: new FormControl('',{nonNullable:true,validators:[Validators.required]})
  });

  onlogin(){

  }
}
