import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule
]

@NgModule({
  //on peut y mettre aussi des composants par ex (il faut le mettre dans declaration et dans export)
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class ThemeModule { }
