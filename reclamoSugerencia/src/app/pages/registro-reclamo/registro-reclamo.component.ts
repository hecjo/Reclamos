import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-reclamo',
  templateUrl: './registro-reclamo.component.html',
  styleUrls: ['./registro-reclamo.component.css']
})

export class RegistroReclamoComponent implements OnInit {
  hide = true;
  formRegis : FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
 

  ngOnInit(): void {}

  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder) {
    this.formRegis = this.fb.group({
      identificacion: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      contrasena1: ['', Validators.required]
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  registro() {
    this._snackBar.open('¡¡Registro exitoso!!', '',
    {duration: 1500
    });
  }


}
