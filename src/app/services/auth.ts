import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  http = inject(HttpClient);

  login(formdata: any) {
    return this.http.post('/api/auth/login', formdata);
  }

  register(formdata: any) {
    return this.http.post('/api/auth/register', formdata);
  }
}
