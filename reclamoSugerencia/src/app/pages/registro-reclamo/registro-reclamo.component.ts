import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-reclamo',
  templateUrl: './registro-reclamo.component.html',
  styleUrls: ['./registro-reclamo.component.css']
})

export class RegistroReclamoComponent {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _snackBar: MatSnackBar) {
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
