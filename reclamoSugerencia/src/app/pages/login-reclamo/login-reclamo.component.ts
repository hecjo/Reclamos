import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-reclamo',
  templateUrl: './login-reclamo.component.html',
  styleUrls: ['./login-reclamo.component.css']
})
export class LoginReclamoComponent implements OnInit {
  
  operation: string = 'correo;'
  formLogin: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
    
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un correo.';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  validarLogin() {
    
  }

}
