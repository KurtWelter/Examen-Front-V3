import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = new FormGroup([]);
  email: string = '';
  error_message: string = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  forgotEmailPassword() {
    this.store.dispatch(show());

    setTimeout(() => {
      this.store.dispatch(hide());
    }, 3000);
  }

  login() {
    const email = this.form.get(['email'])!.value;
    const password = this.form.get(['password'])!.value;

    this.authService.login(email, password).then((authenticated) => {
      if (authenticated) {
        this.router.navigate(['home'], {
          state: { email: this.email },
        });
      } else {
        this.error_message = 'Please verify your credentials.'; // Establece el mensaje de error
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

  recover() {
    this.router.navigate(['recover']);
  }
}
