import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, register } from 'src/app/state/Auth/auth.actions';
import { AuthService } from 'src/app/state/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Input() changeTemplate!: () => void;

  registrationForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  submitForm(): void {
    if (this.registrationForm.valid) {
      // Handle form submission logic here
      console.log('register req data', this.registrationForm.value);
      // this.store.dispatch(register({ user: this.registrationForm.value }));
      this.authService.register(this.registrationForm.value)
    }
  }
}
