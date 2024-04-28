import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { matchPassword, strongPassword } from '../validators/validators';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css'
})
export class RegisterScreenComponent {

  showPassword = false;
  showConfirmPassword = false;
  icon:string = 'bi-eye-fill';
  iconConfirmPassword:string = 'bi-eye-fill'
  processing = false;

  constructor(private service: AuthService, private toastr: ToastrService, private router: Router) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), strongPassword()]),
    passwordConfirmation: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  }, { validators: matchPassword() });

  register() {
    this.processing = true;
    this.service.register(this.registerForm.value).subscribe({
      next: () => {
        this.toastr.success('Usuário cadastrado com sucesso', '');
        this.router.navigate(['/home']);
      },
      error: (error:any) => {
        this.toastr.error('Falha ao registrar usuário.', '');
        console.log(error.message);
        this.processing = false;
      }
    });
  }

  toggleVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }

    if(this.showPassword) {
      this.icon = 'bi-eye-slash-fill';
    } else {
      this.icon = 'bi-eye-fill';
    }

    if(this.showConfirmPassword) {
      this.iconConfirmPassword = 'bi-eye-slash-fill';
    } else {
      this.iconConfirmPassword = 'bi-eye-fill';
    }
  }
}
