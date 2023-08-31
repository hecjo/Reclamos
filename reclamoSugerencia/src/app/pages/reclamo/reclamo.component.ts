import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})


export class ReclamoComponent implements OnInit {

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;
  formReclamo: FormGroup;

  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder) {
    this.formReclamo = this.fb.group({
      departamento: ['',Validators.required],
      centro: ['', Validators.required],
      tipoSolicitud: ['', Validators.required],
      solicitudExpuesta: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  guardarReclamo(){

    this._snackBar.open('¡¡Solicitud realizado exitosamente!!', '',
    {duration: 1500
    });
  }

}
