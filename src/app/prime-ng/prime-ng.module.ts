import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primeng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
