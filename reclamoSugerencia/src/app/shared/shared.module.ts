import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from  '@angular/material/select' ;

import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    NgFor,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],

  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    NgFor,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
